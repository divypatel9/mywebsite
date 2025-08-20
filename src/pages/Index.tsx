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
          <span className="font-heading text-rose font-bold">Divya Loves Kripa</span>
        </div>
        
        

        
      </nav>
    </header>
  );

  const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="reveal-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-text-primary">
  Good Morning my Chikoo<br />Jay Shree Krishna🙏
</h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            I'm sorry for yesterday night. I doubted you. <span className="highlight"></span><br />
            I'm sorry for defending my point instead of protecting your <span className="highlight">heart</span>.<br />
            I <span className="highlight">love you</span> with full heart, honest mind, patient soul and I want to earn your smile again.
          </p>
         
        </div>

        {/* <div className="mt-16 flex justify-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png" alt="Us together" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/d95fe47e-c451-4646-b6d1-d6b972f67e2b.png" alt="Sweet moment" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose">
            <img src="/lovable-uploads/221b1ccf-13a0-4e42-acdf-11653d3263b2.png" alt="Beautiful you" className="w-full h-full object-cover" />
          </div>
        </div> */}

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
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Babygirl I  am Sorry. I didn't mean to argue obviously, Even though I compared myself with you which is completely wrong and meaningless because, we do stuff for eachother not for making it count but instead to show our love and I am pretty sure what story I was trying to make and what I made on your birthday...the bad video...was actually just to make it heartfelt but that was crap. Sorry for that, mereko samaj nai aaya tha... Pan you guided me with the right direction and I made something just for you to smile and make a little special. I just made it without expectation for you to like and smile.
              </p>
              <p>
                See this is true that I am not perfect and I know that, learning and evovling. But I want to learn for you and evolve for you and not against you. Togather we are best team and apart is unimaginable...we have saw ourselves during fights... So I don't want ego and pride to set distance between us emotionally when we already have distance of time and 12,000 Kilometers. So I am sorry that I didn't realised in which wrong direction I was going. 
              </p>
            </div>
          </div>
          
          <div className="reveal-in space-y-4">
            <h3 className="font-heading text-2xl font-bold mb-6 text-gold">Specific Apologies</h3>
            {[
              "For interrupting you when you were taking about your feelings and you wanted being just heard",
              "For choosing being 'me sahi hu' over caring about you",
              "For taking too long to cool down when you needed calm by me and not distance from me.",
              "For not saying 'thank you' more you give so much and I see it all.",
              "For making you doubt my care and love. Please keep that steady  because it is always there",
              "For making and proving myself right when time is not right"
            ].map((apology, index) => (
              <Card key={index} className="card-soft p-4 border-l-4 border-rose">
                <p className="text-text-secondary">{apology}</p>
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
        text: "My heart is only owned by you and you will always be queen of my heart"
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: "Honesty", 
        text: "I will tell the truth in any situation, and hear the truth humbly.No guessing games."
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Patience",
        text: "I'll slow down when emotions run high. I will need some time and little care from you. Please"
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Effort",
        text: "I will try to be creative and be commited to this. Masti, Majak, Pyaar, Care se bhare hue efforts"
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: "Listening",
        text: "I will listen to understand, not to reply {thoda time lagega}. Your feelings are important obviously."
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Repair",
        text: "After any jagdas, I'll will try to heal it as soon as possible, I will need your support. Pretty Please"
      }
    ];

    return (
      <section id="promises" className="py-20">
        <div className="container mx-auto px-6">
          <div className="reveal-in text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-rose">
              My Promises
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ye kuch baate, which I truely believe and aapko yaad kara du.
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
                <p className="text-text-secondary leading-relaxed">
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
        content: "Hum dono sharma te hue, TGR ke room me 5 min ki meeting. Hi, Maru naam Divya. Hello Maru naam Kripa se shuru hua tha ye kissa. Socha nahi tha inta khoobsurat hoga. Sharmili Kripa se mila Sahaasi Divya. Fir kya hua... Divya toh betha tha raah dekh kar firse milne ki usi week me jo possible nai hua untill next Sunday. Uske baad toh mann me ek hi khayal ki bas usko acha lag jau. Toh kahani shuru ho jo humesha Divya ne apne Khayal and sapno me sochi thi. Pyaar bhari, Masti bhari, Care wali, Soft Soft heart - touchy si life. " ,
        // image: "/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png"
      },
      {
        title: "Favorite Memory", 
        content: "Undoubtedly this is from the day before I was leaving to US 7th August 2023. Kripa subah mast surprise dene ko aai apne naye naye fiance Divya ko. Baadme Gharwale bole ki jao beta upar time spent karo, baate karo, {Mummy ne bola ki jo gift laya hai woh de dena}, Kripa ko diya ek-ek karke saare gifts diye, Kripa ne gifts wale kapde pehen ke dikha rahi thi and bich bich me photo sessions. Usi bich Kripa ko mene {Divya} ne bethaya apne legs ke bich me and mirror me selfie lene ke liye and usi me Divya ko aaya bohot sara pyaar and Divya ne apne jeevan ki pehli puppy kar di Kripa ke gaal pe. And Kripa sharmate hui gir gai mere hatho me. Best thing ever happened in both of our lives. Dono ko kuch samaj nai aaya kya ho gaya."
      },
      {
        title: "Hard Moment",
        content: "Ye bhi usi time ka the next day when I was about to leave for US. Because mujhe pata tha me jaa raha hu ek naye adventure pe. But meri bholi Kripa ko nahi maloom tha ki ye ho raha hai. Uss din meri Kripa ke aankho me aasu bhi aa gaye. Uss raat alag ho gaye, bohot saare din ke liye, bohot sare kms ke liye and bohot bade time difference ke liye. Naya naya pyar hua tha, ek dusre se bohot nazdik se jud gaye the kuch dino me hi and ese alag ho gaye. Pan yaadies and bohot sara pyaar chodke gaya tha me and bohot bhara hua and bohot keemti pyaar leke bhi gaya tha me. Aaj bhi sochta hu ki woh jo masoom Divya and Kripa the woh samay ke sath badal gaye, sath me bade hue and evolve hue pan kuch doori reh hi gai humare bich me."
      },
      {
        title: "What I Learned",
        content: "Kripa ke sath mene bohot kuch sikha hai, Bhale hi hum dono long distance me hi the almost all the time, but har moment me I have realised I have got the jackpot of my life. Dono ki personlality kaafi alag hai, Pan sach kahu toh dono ne ek dusre se bohot kuch acha acha sikha hai. First till the last thing will always remain how to love, Becasue Kripa is the first girl in my life whom I loved unconditionally, apart from family member. With time things changes and I don't know when Kripa became part of my life, and everyday to be honest. Days are empty without her. Kripa was in the journey when a boy is turning into man and you my love Kripa have always helped me to to be that man and carved me everyday.",
        // image: "/lovable-uploads/ce3293fd-3e1f-4233-af8e-ec9924fa61d6.png"
      },
      {
        title: "What's Next",
        content: "Now, I have to be more polite with you and also together. LOL. I have always chose you and I want to stick to it because as I said my life, day, hour, minutes are empty without you. So any decision, situation, anyone, everyone, but the you are always the person I will choose to be with. Everything starts and ends along with you. I want to go out with you, play with you, dance with you, eat with you and cook for/with you, build a life with you, be healthy and active with you. Mainly I want to stay and love you unconditionally. So, Kripali Vijaykumar Patel are you ready to be with me unconditionally?"
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
                        <p className="text-text-secondary text-lg leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                      {/* {item.image && (
                        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )} */}
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
          <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
            <p className="text-xl font-medium text-rose mb-8">Beautiful Kripu,</p>
            
            <p>
              Agar kuch short me kehna ho mujhe after 807 days toh that is, I am still learning you, learning about us. I am learning to love also love is soft and very kind. My eyes always look for you in the crowd of thousands. Every moment and every tick of clock is proves and justifies my growing love for you meri jaan.
            </p>
            
            <p>
              I will always keep choosing you no matter what, I love to choose you on the easy days and I will involve fully with all heart and soul when it is tough. Mistakes are made and I am still little immature but I give you myself fully to teach with your kindness and care, because I have to be gentle and soft with your heart. Becuase at the end of the day happy kripa is all I want.
            </p>
            
            <p>
              Thank you for being with me and choosing me everytime in your best and worst days, happiest and saddest days, either morning or night, with everyone and when you are alone. I love to be with you in every moment of our lives.
            </p>
            
            <p>
              I am sorry for the moments I reacted immaturely and didn't acted the way you imagined me. But I am here now with the soft heart, bright eyes on you, listening ears, loving heart and a hand to hold on forever. 
            </p>
            
            <div className="mt-12 text-right">
              <p className="text-xl font-medium text-rose">With all my love,</p>
              <p className="text-2xl font-heading font-bold text-gold mt-2">Your Devu</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );

  const Gallery = () => {
    const images = [
      {
        src: "public/lovable-uploads/photo1.jpg",
        caption: "Us together smiling",
        alt: "Us together smiling"
      },
      {
        src: "public/lovable-uploads/photo2.jpg", 
        caption: "Sweet candid moment before distance",
        alt: "Sweet candid moment"
      },
      {
        src: "public/lovable-uploads/photo3.jpg",
        caption: "I still choose this moment, again and again.",
        alt: "Beautiful portrait"
      },
      {
        src: "/lovable-uploads/3a6cc7ff-c2db-49b1-a242-08ab5cb33a36.png",
        caption: "Where your smile makes time slow.",
        alt: "Us together smiling"
      },
      {
        src: "/lovable-uploads/d95fe47e-c451-4646-b6d1-d6b972f67e2b.png", 
        caption: "Cutest day with the Queen of cutest",
        alt: "Sweet candid moment"
      },
      
      {
        src: "/lovable-uploads/ce3293fd-3e1f-4233-af8e-ec9924fa61d6.png",
        caption: "Perfect together",
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
            <p className="text-xl text-text-secondary">
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
                  <p className="text-text-secondary text-center italic">
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
  }
   
  const Modal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <Card className="card-soft max-w-2xl mx-6 p-8 relative">
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-text-secondary hover:text-rose transition-colors"
          >
            ✕
          </button>
          
          <div className="pr-8">
            <h3 className="font-heading text-2xl font-bold mb-6 text-rose">
              My Message to You
            </h3>
            
            <div className="space-y-4 text-text-secondary leading-relaxed">
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



  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <main>
        <Hero />
        <ApologySection />
        <PromisesSection />
        <Timeline />
        <LetterSection />
        <Gallery />
       
      </main>
      {/* <Footer /> */}
      <Modal />
    </div>
  );
};

export default Index;