export default function FooterContact() {
  return (
    <div>

      <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Контакты
      </span>

      <div className="mt-6 space-y-5">

        <div>

          <div className="text-sm text-neutral-500">
            Email
          </div>

          <a
            href="mailto:hello@mimisu.kz"
            className="text-lg transition hover:text-white"
          >
            hello@mimisu.kz
          </a>

        </div>

        <div>

          <div className="text-sm text-neutral-500">
            Телефон
          </div>

          <a
            href="tel:+77000000000"
            className="text-lg transition hover:text-white"
          >
            +7 (700) 000-00-00
          </a>

        </div>

        <div>

          <div className="text-sm text-neutral-500">
            Telegram
          </div>

          <a
            href="#"
            className="text-lg transition hover:text-white"
          >
            @mimisu
          </a>

        </div>

      </div>

    </div>
  );
}
