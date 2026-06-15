import {
  Truck,
  ShieldCheck,
  RotateCcw,
  CreditCard,
} from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Truck,
      title: "₹100 Shipping",
      text: "Across India",
    },
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      text: "Built To Last",
    },
    {
      icon: RotateCcw,
      title: "No Returns",
      text: "Hassle Free",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      text: "100% Protected",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-md">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 lg:px-10">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}