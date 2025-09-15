import type { ReactNode } from 'react';
import './statistic.css';

interface StatisticProps {
  total: number;
  description: string;
  icon: ReactNode;
}

function StatisticCard({ total, description, icon }: StatisticProps) {
  return (
    <section className="statistic-container">
      <div className="statistic">
        <span className='icon'>{icon}</span>
        <h2>{total}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export { StatisticCard }

