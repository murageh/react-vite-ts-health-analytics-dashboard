import React from "react";
import Button from "../components/Button.tsx";

const AnalyticsSidebar = () => {
    const areas = ['Karanda', 'Mukuru X-ray Ruben', 'Baba Dogo', 'Kiserian', 'Mukuru Kayaba'];
    const [selected, setSelected] = React.useState<string | null>(null);

    return (
        <div className="w-full h-screen bg-white text-slate-900 text-left p-4 shadow-sm rounded-md">
            <h2 className="text-xs text-slate-400 font-semibold mb-4 uppercase">Visits</h2>
            <ul className="space-y-2">
                {areas.map((item, index) => (
                    <Button key={index} value={index + 1} text={item} selected={selected === item}
                            onClick={() => setSelected(item)}/>
                ))}
            </ul>
        </div>
    );
};

export default AnalyticsSidebar;
