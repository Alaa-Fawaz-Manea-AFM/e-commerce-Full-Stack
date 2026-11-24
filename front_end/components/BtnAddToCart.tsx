"use client";

import { useUserContext } from "@/context/MyState";
import { toast } from "react-toastify";
import { ICart } from "@/types";
import { SetStateAction, useState } from "react";
import { handleToogleCartAction } from "@/actions/product";
import { Plus, Trash2, LoaderCircle } from "lucide-react";

const BtnAddToCart = ({
  productId,
  isLiked,
  setCart,
}: {
  productId: string;
  isLiked: boolean;
  setCart?: React.Dispatch<SetStateAction<ICart>>;
}) => {
  const { user, setUser } = useUserContext();
  const [isCart, setIsCart] = useState<boolean>(isLiked || false);
  const [loading, setLoading] = useState(false);

  const handleToogleCartFun = async () => {
    if (!user) return toast.error("Sorry, you must login.");
    if (loading) return;
    setLoading(true);
    const result = await handleToogleCartAction(productId);

    if (!result.success) {
      toast.error(result.message);
      setLoading(false);
      return;
    }

    if (setCart && result.data === false) {
      setCart((pre) => {
        if (!pre?.carts) return pre;

        return {
          ...pre,
          carts: pre.carts.filter((i) => i.product.id !== productId),
        };
      });
    }

    setIsCart(result.data);

    setUser((pre) => {
      if (!pre) return pre;

      return {
        ...pre,
        cartCounts: result.data
          ? pre.cartCounts + 1
          : Math.max(0, pre.cartCounts - 1),
      };
    });

    toast.success(result.message);
    setLoading(false);
  };

  return (
    <button
      onClick={handleToogleCartFun}
      disabled={loading}
      className={`border-custom-green text-custom-green hover:shadow-custom-green hover:shadow-[inset_0_0_8px_rgb(250,245,255)] transition-all duration-300 ease-in-out font-medium border-b-4 rounded-lg text-xl px-5 py-1.5 text-center mb-2 w-full flex items-center justify-center gap-2 disabled:opacity-50 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {loading ? (
        <LoaderCircle size={20} className="animate-spin" />
      ) : isCart ? (
        <>
          <Trash2 size={20} />
          Delete From Cart
        </>
      ) : (
        <>
          <Plus size={20} />
          Add To Cart
        </>
      )}
    </button>
  );
};

export default BtnAddToCart;
