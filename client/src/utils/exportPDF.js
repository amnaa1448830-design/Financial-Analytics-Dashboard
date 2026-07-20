import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportPDF(transactions) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("FinSight Financial Report", 14, 20);

  doc.setFontSize(11);
  doc.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    14,
    30
  );

  const tableData = transactions.map((item) => [
    item.title,
    item.type,
    `Rs. ${item.amount}`,
    item.date,
  ]);

  autoTable(doc, {
    head: [["Title", "Type", "Amount", "Date"]],
    body: tableData,
    startY: 40,
    theme: "grid",
    headStyles: {
      fillColor: [37, 99, 235],
    },
  });

  doc.save("FinSight_Report.pdf");
}