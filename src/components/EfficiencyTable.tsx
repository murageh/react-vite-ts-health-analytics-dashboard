const EfficiencyTable = () => {
    const data = [
        {name: 'Mercy Mukuya', efficiency: '96%', npsDelta: '+0.4', response: '82%'},
        {name: 'Kennedy Ayako', efficiency: '91%', npsDelta: '-0.2', response: '76%'},
        {name: 'Stephens Tomore', efficiency: '89%', npsDelta: '+0.1', response: '78%'},
        {name: 'Faith Kiuyu', efficiency: '84%', npsDelta: '+0.3', response: '80%'},
    ];

    return (
        <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Efficiency Table</h3>
            <table className="min-w-full table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2 text-left">Staff Name</th>
                    <th className="px-4 py-2 text-left">Efficiency</th>
                    <th className="px-4 py-2 text-left">NPS Delta</th>
                    <th className="px-4 py-2 text-left">Response</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.efficiency}</td>
                        <td className="px-4 py-2">{item.npsDelta}</td>
                        <td className="px-4 py-2">{item.response}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EfficiencyTable;
