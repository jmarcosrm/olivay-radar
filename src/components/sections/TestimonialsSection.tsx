import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

// Unique reviews data
const testimonials = [
  {
    name: 'Sofia Costa',
    username: '@sofia',
    body: 'A Olivay trouxe clareza para um processo que antes era fragmentado. Hoje conseguimos acompanhar licitações com muito mais segurança e previsibilidade.',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Rafael Almeida',
    username: '@rafael',
    body: 'O maior ganho foi reduzir retrabalho. O sistema organiza o fluxo de ponta a ponta e nos dá tranquilidade para decidir.',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Juliana Lima',
    username: '@juliana',
    body: 'Antes trabalhávamos reagindo a prazos. Agora temos visão contínua do pipeline.',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Bruno Martins',
    username: '@bruno',
    body: 'A sensação é de controle. Tudo está organizado, rastreável e acessível no momento certo.',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Camila Pereira',
    username: '@camila',
    body: 'A tecnologia trabalha em segundo plano. O time consegue focar na análise e na decisão.',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Gustavo Santos',
    username: '@gustavo',
    body: 'A Olivay elevou o nível da nossa operação de licitações para um padrão mais profissional e confiável.',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    country: '🇧🇷 Brasil',
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-50">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt="@reui_io" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

const TestimonialsSection = () => {
  return (
    <div>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-h2 font-semibold text-olive-deep-1 tracking-headlines">
          O que <span className="font-serif font-light">nossos clientes dizem</span>
        </h2>
      </div>
      <div className="border border-border rounded-lg relative flex h-96 w-full max-w-[800px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {duplicatedTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
          {duplicatedTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {duplicatedTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
          {duplicatedTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Gradient overlays for vertical marquee */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
    </div>
  );
}

export default TestimonialsSection;
