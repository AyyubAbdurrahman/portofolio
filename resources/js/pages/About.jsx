export default function About() {
  return (
    <div className="min-h-screen bg-section text-light pt-24 px-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-2">Deskripsi singkat tentang dirimu dan skill.</p>
      <ul className="list-disc ml-6">
        <li>UI/UX Design</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        {/* Tambahkan skill lain */}
      </ul>
    </div>
  );
} 