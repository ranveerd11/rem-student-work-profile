export function Footer() {
  return (
    <footer className="w-full py-12 border-t bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ranveer Deshmukh | Roll No: 22108A0061
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Renewable Energy Management Portfolio
        </p>
      </div>
    </footer>
  );
}
