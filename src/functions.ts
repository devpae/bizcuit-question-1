export function sum(a: string, b: string): string {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
  
    if (isNaN(numA) || isNaN(numB)) {
      console.log("Invalid input");
      return "";
    }
  
    return (numA + numB).toString();
}