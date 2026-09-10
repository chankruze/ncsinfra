export function YouTubeBackground({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    showinfo: "0",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    disablekb: "1",
    playsinline: "1",
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
        title={title}
        tabIndex={-1}
        allow="autoplay; encrypted-media"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "100vw",
          height: "56.25vw" /* 16:9 */,
          minHeight: "100%",
          minWidth: "177.78vh" /* 16:9 */,
        }}
      />
    </div>
  );
}
