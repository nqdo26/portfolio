interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
        {skills.map((skill, index) => (
          <li key={index}>• {skill}</li>
        ))}
      </ul>
    </div>
  );
}
