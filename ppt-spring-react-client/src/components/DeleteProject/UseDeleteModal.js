import { useState } from "react";

const useDeleteModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(prevState => !prevState);
  }
  return {
    isShowing,
    toggle
  };
};

export default useDeleteModal;
