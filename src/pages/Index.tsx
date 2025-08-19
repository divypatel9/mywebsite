import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Sparkles, Star, Mail, ArrowDown } from 'lucide-react';

const Index = () => {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);

  // Replace these with actual names
  const NAME = "Beautiful";
  const ME = "Yours";

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSolid(window.scrollY > 80);
    };

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-in');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach((el) => observer.observe(el));
    };

    window.addEventListener('scroll', handleScroll);
    observeElements();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
    </svg>
  );

  const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold">
      <path d="M12 0l3.09 6.26L22 9.27l-6.91 3.01L12 24l-3.09-6.72L2 14.27l6.91-3.01L12 0z" fill="currentColor"/>
    </svg>
  );

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="floating-heart absolute top-20 left-10 opacity-30">
        <HeartIcon />
      </div>
      <div className="floating-heart absolute top-40 right-20 opacity-20" style={{animationDelay: '2s'}}>
        <SparkleIcon />
      </div>
      <div className="floating-heart absolute top-60 left-1/4 opacity-25" style={{animationDelay: '4s'}}>
        <HeartIcon />
      </div>
      <div className="floating-heart absolute bottom-40 right-1/3 opacity-20" style={{animationDelay: '1s'}}>
        <SparkleIcon />
      </div>
    </div>
  );

  const Header = () => (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isHeaderSolid ? 'bg-bg-soft/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <HeartIcon />
          <span className="font-heading text-rose font-bold">Love</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm text-muted-text hover:text-rose transition-colors">Home</a>
          <a href="#sorry" className="text-sm text-muted-text hover:text-rose transition-colors">Why I'm Sorry</a>
          <a href="#promises" className="text-sm text-muted-text hover:text-rose transition-colors">Promises</a>
          <a href="#story" className="text-sm text-muted-text hover:text-rose transition-colors">Our Story</a>
          <a href="#letters" className="text-sm text-muted-text hover:text-rose transition-colors">Letters</a>
          <a href="#gallery" className="text-sm text-muted-text hover:text-rose transition-colors">Gallery</a>
        </div>

        <Button 
          onClick={() => setShowModal(true)}
          variant="romantic"
          size="sm"
        >
          <Mail className="w-4 h-4 mr-2" />
          Play Message
        </Button>
      </nav>
    </header>
  );

  const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="reveal-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-rose">
            I'm Sorry.<br />I Love You.
          </h1>
          <p className="text-xl md:text-2xl text-muted-text max-w-3xl mx-auto mb-8 leading-relaxed">
            I'm sorry for the moments I made heavy what should have felt light.<br />
            I'm sorry for defending my point instead of protecting your heart.<br />
            I love you—fully, honestly, patiently—and I want to earn your smile again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('letters')?.scrollIntoView({behavior: 'smooth'})}
              variant="romantic"
              size="lg"
            >
              Read My Letter
            </Button>
            <Button 
              onClick={() => document.getElementById('story')?.scrollIntoView({behavior: 'smooth'})}
              variant="romantic-outline"
              size="lg"
            >
              See Our Story
            </Button>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png" alt="Us together" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/d95fe47e-c451-4646-b6d1-d6b972f67e2b.png" alt="Sweet moment" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/221b1ccf-13a0-4e42-acdf-11653d3263b2.png" alt="Beautiful you" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-rose" />
        </div>
      </div>
      <FloatingElements />
    </section>
  );

  const ApologySection = () => (
    <section id="sorry" className="py-20 bg-bg-soft">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-rose">
              Why I'm Sorry
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-text">
              <p>
                I'm sorry, {NAME}. I'm sorry for the raised tones, the stubborn pauses, the times I made you feel alone even when I was right there. I'm sorry I counted the argument more carefully than I counted your feelings. You deserved my gentleness, not my impatience. You deserved my listening, not my winning.
              </p>
              <p>
                I'm not perfect, but I will be accountable. I will take the first breath, the first step back, the first "I'm sorry" every time. I won't let pride sit between us. I want to be the person you feel safest with—the place you come home to, not the storm you hide from.
              </p>
            </div>
          </div>
          
          <div className="reveal-in space-y-4">
            <h3 className="font-heading text-2xl font-bold mb-6 text-gold">Specific Apologies</h3>
            {[
              "For interrupting you when you were vulnerable—your feelings deserved space.",
              "For choosing being 'right' over being kind—kindness is the only victory I want.",
              "For taking too long to cool down—you needed calm, not distance.",
              "For not saying 'thank you' more—you give so much and I see it all.",
              "For making you doubt my steadiness—my steadiness starts now."
            ].map((apology, index) => (
              <Card key={index} className="card-soft p-4 border-l-4 border-rose">
                <p className="text-muted-text">{apology}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const PromisesSection = () => {
    const promises = [
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Loyalty",
        text: "My heart chooses you every morning. I am present, devoted, and intentional in protecting us."
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: "Honesty", 
        text: "I will tell the truth kindly, and hear the truth humbly. No silent punishments. No guessing games."
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Patience",
        text: "I'll slow down when emotions run high. If I need time, I'll say it, and I'll return with care."
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Effort",
        text: "I'll invest in the small daily rituals—good morning messages, check-ins, date plans, and cheers for your wins."
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: "Listening",
        text: "I will listen to understand, not to reply. Your feelings set my pace."
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Repair",
        text: "After any conflict, I'll initiate repair within 24 hours—reflection, apology, and a plan."
      }
    ];

    return (
      <section id="promises" className="py-20">
        <div className="container mx-auto px-6">
          <div className="reveal-in text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-rose">
              My Promises
            </h2>
            <p className="text-xl text-muted-text max-w-2xl mx-auto">
              These are my vows to you, my commitment to love you better every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <Card key={index} className="reveal-in card-soft p-8 text-center hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-rose mb-4 flex justify-center">
                  {promise.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4 text-gold">
                  {promise.title}
                </h3>
                <p className="text-muted-text leading-relaxed">
                  {promise.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Timeline = () => {
    const timelineItems = [
      {
        title: "How We Met",
        content: "I remember the first moment I saw you—the way the world went quiet and then brighter.",
        image: "/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png"
      },
      {
        title: "Favorite Memory", 
        content: "That one laugh you tried to hide behind your hand; I still chase it in everything I do."
      },
      {
        title: "Hard Moment",
        content: "We've had storms. I won't deny them—but we stood through them, and I learned."
      },
      {
        title: "What I Learned",
        content: "Love is not a debate to win; it's a person to hold. And that person is you.",
        image: "/lovable-uploads/ce3293fd-3e1f-4233-af8e-ec9924fa61d6.png"
      },
      {
        title: "What's Next",
        content: "More softness. More choosing each other. More dinners, walks, playlists, sunrises, and shared quiet."
      }
    ];

    return (
      <section id="story" className="py-20 bg-bg-soft">
        <div className="container mx-auto px-6">
          <div className="reveal-in text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-rose">
              Our Story
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="reveal-in flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-4 h-4 bg-rose rounded-full mt-6 mr-8 relative">
                  <div className="absolute top-4 left-2 w-0.5 h-16 bg-rose/30 last:hidden"></div>
                </div>
                <div className="flex-grow">
                  <Card className="card-soft p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-grow">
                        <h3 className="font-heading text-2xl font-bold mb-4 text-gold">
                          {item.title}
                        </h3>
                        <p className="text-muted-text text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                      {item.image && (
                        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const LetterSection = () => (
    <section id="letters" className="py-20">
      <div className="container mx-auto px-6">
        <div className="reveal-in text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-rose">
            A Letter for You
          </h2>
        </div>

        <Card className="card-soft max-w-4xl mx-auto p-12">
          <div className="prose prose-lg text-muted-text leading-relaxed space-y-6">
            <p className="text-xl font-medium text-rose mb-8">{NAME},</p>
            
            <p>
              If I could fold this page into a small, warm thing and tuck it in your pocket, I would. I want you to carry proof that I'm learning you, learning us. I'm learning that love is not loud. It's tender. It's the last slice saved for you, the text that says "home soon?", the hand that finds yours under the table.
            </p>
            
            <p>
              I will keep choosing you—when it's easy, and especially when it's not. I'll keep choosing to be gentle with your heart. I'll keep choosing to be proud of us—because we're worth the effort.
            </p>
            
            <p>
              Thank you for every patience you've given me. For your light. For your laughter. For your courage to love me.
            </p>
            
            <p>
              I'm sorry for the moments I didn't meet your tenderness with my own. I'm here now—with soft hands, listening eyes, and a heart that wants to be your safest place.
            </p>
            
            <div className="mt-12 text-right">
              <p className="text-xl font-medium text-rose">With all my love,</p>
              <p className="text-2xl font-heading font-bold text-gold mt-2">{ME}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );

  const Gallery = () => {
    const images = [
      {
        src: "/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png",
        caption: "Where your smile makes time slow.",
        alt: "Us together smiling"
      },
      {
        src: "/lovable-uploads/d95fe47e-c451-4646-b6d1-d6b972f67e2b.png", 
        caption: "The day felt lighter because you were there.",
        alt: "Sweet candid moment"
      },
      {
        src: "/lovable-uploads/221b1ccf-13a0-4e42-acdf-11653d3263b2.png",
        caption: "I still choose this moment, again and again.",
        alt: "Beautiful portrait"
      },
      {
        src: "/lovable-uploads/ce3293fd-3e1f-4233-af8e-ec9924fa61d6.png",
        caption: "More of this. Always.",
        alt: "Perfect together"
      }
    ];

    return (
      <section id="gallery" className="py-20 bg-bg-soft">
        <div className="container mx-auto px-6">
          <div className="reveal-in text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-rose">
              Our Moments
            </h2>
            <p className="text-xl text-muted-text">
              Every photo tells our story
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <Card key={index} className="reveal-in card-soft overflow-hidden group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-muted-text text-center italic">
                    "{image.caption}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const FutureSection = () => {
    const dreams = [
      "Plan a weekend just for us—no phones, just presence.",
      "Cook dinner together and dance in the kitchen.", 
      "Write each other a letter every month.",
      "Watch the sunrise wrapped in one blanket.",
      "Create a playlist for the next chapter of us."
    ];

    return (
      <section id="future" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-rose">
                Our Next Chapters
              </h2>
              <div className="space-y-4">
                {dreams.map((dream, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded border-2 border-rose flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-rose rounded"></div>
                    </div>
                    <p className="text-muted-text text-lg">{dream}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal-in">
              <Card className="card-soft p-8">
                <h3 className="font-heading text-2xl font-bold mb-6 text-gold">
                  Let's Begin Again
                </h3>
                <p className="text-muted-text text-lg leading-relaxed mb-8">
                  Every sunrise is a chance to love you better. Every day is an opportunity to choose us. I'm ready to write our next chapter together—one filled with more laughter, more understanding, and more love than we've ever known.
                </p>
                <Button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
                  variant="romantic"
                  className="w-full"
                  size="lg"
                >
                  Let's Begin Again
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FinalSection = () => {
    const triggerConfetti = () => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
      <section id="foryou" className="py-20 bg-bg-soft relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Card className="card-soft max-w-2xl mx-auto p-12 relative">
            <div className="reveal-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-rose">
                For You, Always
              </h2>
              
              <p className="text-xl text-muted-text mb-8 leading-relaxed">
                Thank you for reading, {NAME}. If you'll have me, I'll spend every day loving you better.
              </p>

              <div className="mb-8">
                <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto">
                  <path 
                    d="M20 40 Q50 20 80 40 T140 40 Q170 30 180 40" 
                    stroke="hsl(var(--gold))" 
                    strokeWidth="2" 
                    fill="none"
                    className="signature-path"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      animation: 'draw-signature 2s ease-out forwards'
                    }}
                  />
                </svg>
              </div>

              <Button 
                onClick={triggerConfetti}
                variant="romantic"
                size="lg"
                className="px-12 text-xl font-bold transform hover:scale-105 transition-transform duration-300"
              >
                I'm Yours
              </Button>

              {showConfetti && (
                <div 
                  className="fixed inset-0 pointer-events-none z-50"
                  aria-live="polite"
                  aria-label="Thank you for reading. I love you."
                >
                  {Array.from({length: 40}).map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: '3s'
                      }}
                    >
                      <HeartIcon />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>
    );
  };

  const Modal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <Card className="card-soft max-w-2xl mx-6 p-8 relative">
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-muted-text hover:text-rose transition-colors"
          >
            ✕
          </button>
          
          <div className="pr-8">
            <h3 className="font-heading text-2xl font-bold mb-6 text-rose">
              My Message to You
            </h3>
            
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p className="text-lg font-medium text-rose">{NAME},</p>
              <p>If I could fold this page into a small, warm thing and tuck it in your pocket, I would...</p>
              <p>I will keep choosing you—when it's easy, and especially when it's not.</p>
              <p>I'm sorry for the moments I didn't meet your tenderness with my own. I'm here now.</p>
              <div className="mt-8 text-right">
                <p className="text-rose font-medium">With all my love,</p>
                <p className="text-xl font-heading font-bold text-gold">{ME}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  const Footer = () => (
    <footer className="py-12 text-center border-t border-bg-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <HeartIcon />
          <span className="font-heading text-rose font-bold">Built for you, with love</span>
        </div>
        <p className="text-muted-text text-sm">
          December 2024 • From my heart to yours
        </p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <ApologySection />
        <PromisesSection />
        <Timeline />
        <LetterSection />
        <Gallery />
        <FutureSection />
        <FinalSection />
      </main>
      <Footer />
      <Modal />
    </div>
  );
};

export default Index;