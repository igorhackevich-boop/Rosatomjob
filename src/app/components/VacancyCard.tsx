import React from 'react';

interface PerkItem {
  icon: string;
  title: string;
  body: string;
}

interface VacancyCardProps {
  organization: string;
  title: string;
  tags: string[];
  illustration: React.ReactNode;
  aboutText: string[];
  tasks: string[];
  requirements: string[];
  bonusRequirements: string[];
  perks: PerkItem[];
  salary?: string;
  format: string[];
  extra?: string;
}

export function VacancyCard({
  organization,
  title,
  tags,
  illustration,
  aboutText,
  tasks,
  requirements,
  bonusRequirements,
  perks,
  salary,
  format,
  extra
}: VacancyCardProps) {
  return (
    <div className="w-full max-w-[840px] mx-auto bg-[#FDFBF8] shadow-[0_4px_48px_rgba(0,0,0,0.22)] overflow-hidden">
      {/* Header */}
      <div className="bg-[#0D1B2A] min-h-[190px] grid grid-cols-[1fr_280px] items-stretch relative overflow-hidden">
        <div className="p-[30px_36px_30px_40px] flex flex-col justify-between relative z-10">
          <div className="font-mono text-[9px] tracking-[0.2em] text-[#3A6A9A] uppercase">
            {organization}
          </div>
          <div className="font-['Bebas_Neue'] text-[58px] leading-[0.90] text-white tracking-[0.01em] mt-[10px]">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-[14px] mt-[18px] flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[8px] tracking-[0.16em] text-[#4A7AAA] uppercase border border-[#1E3E5E] px-[10px] py-[4px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration with fade */}
        <div className="absolute right-[-10px] top-[-10px] bottom-[-10px] w-[280px] flex items-center justify-end pointer-events-none z-[1]">
          <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#0D1B2A] to-transparent z-[3]" />
          {illustration}
        </div>
      </div>

      {/* Body */}
      <div className="p-[30px_40px_36px] flex flex-col">
        {/* About */}
        <div className="mb-6 pb-6 border-b border-[#DDD8CF]">
          {aboutText.map((text, i) => (
            <p key={i} className="text-[12px] leading-[1.85] text-[#2A3A4A] mt-[9px] first:mt-0" dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-x-10 mb-[22px] pb-[22px] border-b border-[#DDD8CF]">
          {/* Tasks */}
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.26em] text-[#8A8A8A] uppercase mb-[11px]">
              Задачи
            </div>
            <ul className="list-none">
              {tasks.map((task, i) => (
                <li
                  key={i}
                  className="text-[11.5px] leading-[1.55] text-[#1C2B3A] py-[5.5px] pl-[18px] relative border-b border-[rgba(0,0,0,0.042)] last:border-b-0 before:content-['–'] before:absolute before:left-0 before:text-[#2A5A8C] before:font-bold"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.26em] text-[#8A8A8A] uppercase mb-[11px]">
              Требования
            </div>
            <ul className="list-none">
              {requirements.map((req, i) => (
                <li
                  key={i}
                  className="text-[11.5px] leading-[1.55] text-[#1C2B3A] py-[5.5px] pl-[18px] relative border-b border-[rgba(0,0,0,0.042)] last:border-b-0 before:content-['–'] before:absolute before:left-0 before:text-[#2A5A8C] before:font-bold"
                >
                  {req}
                </li>
              ))}
            </ul>

            {bonusRequirements.length > 0 && (
              <>
                <div className="font-mono text-[8.5px] tracking-[0.26em] text-[#8A8A8A] uppercase mb-[11px] mt-4">
                  Будет плюсом
                </div>
                <ul className="list-none">
                  {bonusRequirements.map((req, i) => (
                    <li
                      key={i}
                      className="text-[10.5px] leading-[1.55] text-[#8A8A8A] py-[5.5px] pl-[18px] relative border-b border-[rgba(0,0,0,0.042)] last:border-b-0 before:content-['·'] before:absolute before:left-0 before:text-[#DDD8CF] before:text-[20px] before:top-[2px]"
                    >
                      {req}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-[10px] mb-[22px] pb-[22px] border-b border-[#DDD8CF]">
          {perks.map((perk, i) => (
            <div key={i}>
              <div className="text-[15px] mb-[5px] text-[#2A5A8C] leading-none">
                {perk.icon}
              </div>
              <div className="text-[11px] font-semibold text-[#1C2B3A] mb-[3px]">
                {perk.title}
              </div>
              <div className="text-[10px] leading-[1.6] text-[#4A5A6A]">
                {perk.body}
              </div>
            </div>
          ))}
        </div>

        {/* Offer */}
        <div className="bg-[#0D1B2A] p-[22px_28px] grid grid-cols-3 gap-x-7 gap-y-[14px] mt-auto">
          <div>
            <div className="font-mono text-[8px] tracking-[0.16em] text-[#3A6080] uppercase mb-[5px]">
              Белая зп · до вычета
            </div>
            <div className="font-['Bebas_Neue'] text-[30px] text-white tracking-[0.04em] leading-none">
              {salary || '__ ___ ₽'}
            </div>
            <div className="text-[8.5px] text-[#3A6080] mt-[3px] font-mono tracking-[0.1em]">
              официальное трудоустройство
            </div>
          </div>

          <div>
            <div className="font-mono text-[8px] tracking-[0.16em] text-[#3A6080] uppercase mb-[5px]">
              Формат
            </div>
            <div className="text-[11.5px] text-[#C8D8E8] leading-[1.45] font-medium">
              {format.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < format.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[8px] tracking-[0.16em] text-[#3A6080] uppercase mb-[5px]">
              {extra ? extra.split(':')[0] : 'Проекты'}
            </div>
            <div className="text-[11.5px] text-[#C8D8E8] leading-[1.45] font-medium">
              {extra ? extra.split(':').slice(1).join(':').trim() : 'Уникальные курсы для атомной отрасли'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="h-[3px] bg-[#2A5A8C]" />
    </div>
  );
}
