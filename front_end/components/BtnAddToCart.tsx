"use client";
import { useUserContext } from "@/context/MyState";
// import { handleToogleCart } from "@/constant/api";
import { toast } from "react-toastify";
import { ICart } from "@/types";
import { SetStateAction, useState } from "react";
import { handleToogleCartAction } from "@/actions/product";

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
  const [isLike, setIsLike] = useState<boolean>(isLiked || false);
  const [loading, setLoading] = useState(false);

  const handleToogleCartFun = async () => {
    if (!user) return toast.error("Sorry, your must login.");
    if (loading) return;
    // export const handleToogleCart = async (
    //   productId: string,
    //   setUser: Dispatch<SetStateAction<IUser | null>>,
    //   setIsLike: Dispatch<SetStateAction<boolean>>,
    //   setCart?: Dispatch<SetStateAction<ICart>>,
    // ) => {
    // try {
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
          carts: pre.carts?.filter((i) => i.product.id !== productId),
        };
      });
    }

    setIsLike(result.data);
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
    //   } catch {
    //     toast.error("Failed to delete product");
    //   }
    // };
    // handleToogleCart(productId, setUser, setIsLike, setCart);
  };

  return (
    <button
      onClick={handleToogleCartFun}
      className="border-custom-green text-custom-green hover:shadow-custom-green hover:shadow-[inset_0_0_8px_rgb(250,245,255)] transition-all duration-300 ease-in-out font-medium border-b-4 rounded-lg text-xl px-5 py-1.5 text-center mb-2 w-full"
    >
      {isLike ? "Delete" : "Add"} To Cart
    </button>
  );
};

export default BtnAddToCart;
