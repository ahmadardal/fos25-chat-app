const bgColorMap: {

  [theme: string]: {
    [accent: string]: {
      bg: string;
      sidebarBg: string;
      sidebarBgHover:string;
      sidebarBorder: string;
      chatBg: string;
      text: string;
      inputBg: string;
      inputBorder: string;
      bubbleSelf: string;
      bubbleSelfText: string;
      bubbleOther: string;
      bubbleOtherText: string;
    };
  };
} = {
  Light: {
    Red: {
      bg: "bg-white",
      sidebarBg: "bg-gray-100",
      sidebarBgHover: "bg-gray-200",
      sidebarBorder: "border border-gray-200",
      chatBg: "bg-white",
      text: "text-gray-900",
      inputBg: "bg-gray-100",
      inputBorder: "border border-gray-300",
      bubbleSelf: "bg-red-500",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-200",
      bubbleOtherText: "text-gray-900",
    },
    Blue: {
      bg: "bg-white",
      sidebarBg: "bg-gray-100",
      sidebarBgHover: "bg-gray-200",
      sidebarBorder: "border border-gray-200",
      chatBg: "bg-white",
      text: "text-gray-900",
      inputBg: "bg-gray-100",
      inputBorder: "border border-gray-300",
      bubbleSelf: "bg-blue-600",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-200",
      bubbleOtherText: "text-gray-900",
    },
    Green: {
      bg: "bg-white",
      sidebarBg: "bg-gray-100",
      sidebarBgHover: "bg-gray-200",
      sidebarBorder: "border border-gray-200",
      chatBg: "bg-white",
      text: "text-gray-900",
      inputBg: "bg-gray-100",
      inputBorder: "border border-gray-300",
      bubbleSelf: "bg-green-500",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-200",
      bubbleOtherText: "text-gray-900",
    },
    Yellow: {
      bg: "bg-white",
      sidebarBg: "bg-gray-100",
      sidebarBgHover: "bg-gray-200",
      sidebarBorder: "border border-gray-200",
      chatBg: "bg-white",
      text: "text-gray-900",
      inputBg: "bg-gray-100",
      inputBorder: "border border-gray-300",
      bubbleSelf: "bg-yellow-400",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-200",
      bubbleOtherText: "text-gray-900",
    },
    Purple: {
      bg: "bg-white",
      sidebarBg: "bg-gray-100",
      sidebarBgHover: "bg-gray-200",
      sidebarBorder: "border border-gray-200",
      chatBg: "bg-white",
      text: "text-gray-900",
      inputBg: "bg-gray-100",
      inputBorder: "border border-gray-300",
      bubbleSelf: "bg-purple-600",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-200",
      bubbleOtherText: "text-gray-900",
    },
  },
  Dark: {
    Red: {
      bg: "bg-gray-900",
      sidebarBg: "bg-gray-800",
      sidebarBgHover: "bg-gray-700",
      sidebarBorder: "border border-gray-700",
      chatBg: "bg-gray-900",
      text: "text-gray-100",
      inputBg: "bg-gray-800",
      inputBorder: "border border-gray-600",
      bubbleSelf: "bg-red-500",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-700",
      bubbleOtherText: "text-white",
    },
    Blue: {
      bg: "bg-gray-900",
      sidebarBg: "bg-gray-800",
      sidebarBgHover: "bg-gray-700",
      sidebarBorder: "border border-gray-700",
      chatBg: "bg-gray-900",
      text: "text-gray-100",
      inputBg: "bg-gray-800",
      inputBorder: "border border-gray-600",
      bubbleSelf: "bg-blue-600",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-700",
      bubbleOtherText: "text-white",
    },
    Green: {
      bg: "bg-gray-900",
      sidebarBg: "bg-gray-800",
      sidebarBgHover: "bg-gray-700",
      sidebarBorder: "border border-gray-700",
      chatBg: "bg-gray-900",
      text: "text-gray-100",
      inputBg: "bg-gray-800",
      inputBorder: "border border-gray-600",
      bubbleSelf: "bg-green-500",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-700",
      bubbleOtherText: "text-white",
    },
    Yellow: {
      bg: "bg-gray-900",
      sidebarBg: "bg-gray-800",
      sidebarBgHover: "bg-gray-700",
      sidebarBorder: "border border-gray-700",
      chatBg: "bg-gray-900",
      text: "text-gray-100",
      inputBg: "bg-gray-800",
      inputBorder: "border border-gray-600",
      bubbleSelf: "bg-yellow-400",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-700",
      bubbleOtherText: "text-white",
    },
    Purple: {
      bg: "bg-gray-900",
      sidebarBg: "bg-gray-800",
      sidebarBgHover: "bg-gray-700",
      sidebarBorder: "border border-gray-700",
      chatBg: "bg-gray-900",
      text: "text-gray-100",
      inputBg: "bg-gray-800",
      inputBorder: "border border-gray-600",
      bubbleSelf: "bg-purple-600",
      bubbleSelfText: "text-white",
      bubbleOther: "bg-gray-700",
      bubbleOtherText: "text-white",
    },
  },
};
export default bgColorMap; 