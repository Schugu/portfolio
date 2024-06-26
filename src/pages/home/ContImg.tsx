
interface contImgProps {
  children: React.ReactNode;
  shape: "square" | "circle";
}

export default function ContImg({ children, shape }: contImgProps) {
  return (
    <div className={`w-48 h-48 md:min-w-80 md:h-80 xl:min-w-96 xl:h-96 
      ${shape === "circle" ? "rounded-full overflow-hidden" : "rounded"}
    border-2 border-solid border-AZUL dark:border-AMARILLO bg-gradient-to-b  from-AZUL to-AMARILLO`}>
      {children}
    </div>
  )
}
