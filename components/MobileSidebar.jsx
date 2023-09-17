"use client"

import { Sidebar } from "lucide-react";
import { useState } from "react";

const MobileSidebar = () => {
    const [active, setActive] = useState(false);

    return (
        <div>
            <div className="relative cursor-pointer flex w-8 h-8" onClick={setActive(!active)}>
                <Image fill src="/menu.png" alt="logo" /> 
            </div>
            {active ? <Sidebar /> : null}
        </div>
    )
}

export default MobileSidebar