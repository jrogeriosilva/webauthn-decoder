import { ExternalLink, KeyRound } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const DEMO_URL = "https://jrogeriosilva.github.io/fido2-demo/"

export function DemoCallToAction() {
  return (
    <section
      aria-labelledby="demo-cta-heading"
      className="flex flex-col gap-4 rounded-md border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <KeyRound className="size-4.5" />
        </span>
        <div className="space-y-1">
          <h2 id="demo-cta-heading" className="text-base font-semibold">
            New to FIDO2? See the protocol in action.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Walk through registration and authentication step by step — challenge, attestation
            and assertion — in an interactive demo.
          </p>
        </div>
      </div>
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ size: "lg", className: "gap-1.5 self-start sm:self-auto" })}
      >
        Try the FIDO2 demo
        <ExternalLink className="size-3.5" />
      </a>
    </section>
  )
}
