import { Star, GitFork, Eye, AlertCircle } from "lucide-react";

interface RepoStatsProps {
     stars?: number;
     forks?: number;
     watchers?: number;
     openIssues?: number;
}

export function RepoStats({
     stars,
     forks,
     watchers,
     openIssues,
}: RepoStatsProps) {
     const isUnavailable =
          [stars, forks, watchers, openIssues].some((value) => value === undefined);

     if (isUnavailable) {
          return (
               <div className="rounded-2xl p-6 shadow-neu-raised bg-bg-base">
                    <p className="text-sm font-semibold text-content-primary">
                         Stats temporarily unavailable
                    </p>
                    <p className="mt-2 text-xs text-content-secondary">
                         Live GitHub repository metrics could not be loaded right now.
                    </p>
               </div>
          );
     }

     const stats = [
          {
               icon: Star,
               value: stars!,
               label: "Stars",
          },
          {
               icon: GitFork,
               value: forks!,
               label: "Forks",
          },
          {
               icon: Eye,
               value: watchers!,
               label: "Watchers",
          },
          {
               icon: AlertCircle,
               value: openIssues!,
               label: "Open Issues",
          },
     ];

     return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                         <div
                              key={stat.label}
                              className="flex flex-col items-center text-center p-6 rounded-2xl shadow-neu-raised bg-bg-base"
                         >
                              <Icon size={20} className="text-theme-primary" />
                              <span className="text-3xl font-black tracking-tight mt-3 text-theme-primary">
                                   {stat.value.toLocaleString()}
                              </span>
                              <span className="text-sm uppercase tracking-widest mt-2 text-content-secondary">
                                   {stat.label}
                              </span>
                         </div>
                    );
               })}
          </div>
     );
}
