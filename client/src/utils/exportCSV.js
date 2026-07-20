export function exportCSV(transactions) {
  if (!transactions.length) {
    alert("No transactions available.");
    return;
  }

  const headers = ["Title", "Type", "Amount", "Date"];

  const rows = transactions.map((item) => [
    item.title,
    item.type,
    item.amount,
    item.date,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "FinSight_Transactions.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}