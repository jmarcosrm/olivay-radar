import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SolutionDetailProps {
  title: string;
  description: ReactNode;
  features: { title: string; description: string }[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
}

const SolutionDetail = ({
  title,
  description,
  features,
  image,
  imageAlt,
  reverse = false,
  children,
}: SolutionDetailProps) => {
  return (
    <section className="py-section-y-mobile md:py-section-y">
      <div className="container">
        <div className={cn('grid lg:grid-cols-2 gap-12 items-center', reverse && 'lg:grid-flow-col-dense')}>
          <div className={cn('lg:order-last', reverse && 'lg:order-first')}>
            <img src={image} alt={imageAlt} className="rounded-2xl shadow-lg" />
          </div>
          <div>
                        <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines mb-4">{title}</h2>
            <p className="text-lg text-olive-mid-3 leading-relaxed mb-8">{description}</p>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h4 className="font-semibold text-olive-deep-2 mb-1">{feature.title}</h4>
                  <p className="text-olive-mid-3 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetail;
