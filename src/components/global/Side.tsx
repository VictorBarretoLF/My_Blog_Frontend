import React, { ReactNode } from "react";

interface SideProps {
    children: ReactNode;
    orientation: "left" | "right";
}

const Side: React.FC<SideProps> = ({ children, orientation }) => {
    // Determine the classes based on the orientation
    const positionClass = orientation === "left" ? "left-10" : "right-10"; // 'left-10' and 'right-10' are Tailwind classes, adjust as needed

    return <div className={`w-10 fixed bottom-0 bg-red-500 ${positionClass}`}>{children}</div>;
};

export default Side;
