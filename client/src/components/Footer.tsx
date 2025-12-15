export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/50 text-center">
      <div className="container px-6">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Kinho. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Designed & Built with passion.
        </p>
      </div>
    </footer>
  );
}
