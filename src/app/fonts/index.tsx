import localFont from "next/font/local";

const pressStart2P = localFont({
    src: [
      {
        path: "./PressStart2P-Regular.ttf",
        weight: "400",
        style: "normal",
      },
    ],
    variable: "--font-pressStart2P",
  });
  const gwendolyn = localFont({
    src: [
      {
        path: "./Gwendolyn-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "./Gwendolyn-Bold.ttf",
        weight: "700",
        style: "bold",
      },
    ],
    variable: "--font-gwendolyn",
  });
  
  const poppins = localFont({
    src: [
      {
        path: "./Poppins-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "./Poppins-SemiBold.ttf",
        weight: "600",
        style: "semi-bold",
      },
      {
        path: "./Poppins-Bold.ttf",
        weight: "700",
        style: "bold",
      },
      {
        path: "./Poppins-Black.ttf",
        weight: "900",
        style: "black",
      },
    ],
    variable: "--font-poppins"
  });

  export { gwendolyn, poppins, pressStart2P}