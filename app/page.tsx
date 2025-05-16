// app/page.tsx
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function HomePage() {
  return (
    <main className="h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 overflow-hidden">
        {/* Left Column - Profile */}
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center overflow-hidden">
          <ProfileSection />
        </div>

        {/* Right Column - Skills + Experience */}
        <div className="md:col-span-3 flex flex-col md:justify-center overflow-y-auto">
          <SkillsSection />
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}
