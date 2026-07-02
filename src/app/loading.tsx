export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-12 w-12 rounded-full border-4 border-brand-border border-t-secondary animate-spin" />
        <div>
          <p className="text-sm font-semibold text-primary">Loading page</p>
          <p className="text-xs text-brand-muted">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
}