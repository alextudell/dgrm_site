export type SupportedLanguage = 'en' | 'ru';

export interface TranslationSchema {
  meta: {
    homeTitle: string;
    homeDescription: string;
    notFoundTitle: string;
    notFoundHeading: string;
    notFoundDesc: string;
    notFoundBack: string;
  };
  nav: {
    stage: string;
    aiCoach: string;
    ecosystem: string;
    faq: string;
    getAccess: string;
    privacy: string;
    terms: string;
    themeToggle: string;
    langEnLabel: string;
    langRuLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    joinBeta: string;
    iosWaitlist: string;
    explore: string;
  };
  stage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabsNav: {
      overview: string;
      today: string;
      plan: string;
      habits: string;
      journal: string;
    };
    tabs: {
      goals: {
        label: string;
        tag: string;
        title: string;
        desc: string;
        quote: string;
        quoteAuthor: string;
        screen: {
          category: string;
          status: string;
          name: string;
          progressLabel: string;
          progressPercent: string;
          progressSteps: string;
          manifestoTitle: string;
          manifestoBody: string;
          valueTitle: string;
          valueTag: string;
          deadlineTitle: string;
          deadlineValue: string;
          rewardTitle: string;
          rewardValue: string;
        };
      };
      roadmap: {
        label: string;
        tag: string;
        title: string;
        desc: string;
        quote: string;
        quoteAuthor: string;
        screen: {
          stage8Badge: string;
          stage8Title: string;
          stage8Tasks: string;
          stage9Badge: string;
          stage9Title: string;
          stage9Tasks: string;
          stage9Task1: string;
          stage9Task2: string;
          stage9Task3Title: string;
          stage9Task3Desc: string;
          stage9Task4Title: string;
          stage9Task4Desc: string;
          stage9Task5Title: string;
          stage9Task5Desc: string;
          stage9Task6Title: string;
          stage9Task6Desc: string;
          stage10Badge: string;
          stage10Title: string;
          stage10Tasks: string;
        };
      };
      rocket: {
        label: string;
        tag: string;
        title: string;
        desc: string;
        quote: string;
        quoteAuthor: string;
        screen: {
          monthLabel: string;
          days: {
            mon: string;
            tue: string;
            wed: string;
            thu: string;
            fri: string;
            sat: string;
            sun: string;
          };
          habitAdd: string;
          habit1: string;
          habit2: string;
          task1Title: string;
          task1Desc: string;
          task1Stage: string;
          task2Title: string;
          task2Desc: string;
          task2Stage: string;
          task3Title: string;
          task3Desc: string;
          task3Stage: string;
          completedLabel: string;
        };
      };
      journal: {
        label: string;
        tag: string;
        title: string;
        desc: string;
        quote: string;
        quoteAuthor: string;
        screen: {
          tabJournal: string;
          tabWiki: string;
          todayLabel: string;
          entry1Day: string;
          entry1Time: string;
          entry1Text: string;
          dateLabel: string;
          entry2Day: string;
          entry2Time: string;
          entry2Text: string;
        };
      };
      pulse: {
        label: string;
        tag: string;
        title: string;
        desc: string;
        quote: string;
        quoteAuthor: string;
        screen: {
          valuesTitle: string;
          tabList: string;
          tabWheel: string;
          valBeauty: string;
          valFreedom: string;
          valMastery: string;
          valHealth: string;
          valFamily: string;
          valGrowth: string;
          valMindfulness: string;
          harmonyTitle: string;
          harmonyDate: string;
          pulseTitle: string;
          streakDays: string;
          streakLabel: string;
          activeCount: string;
          activeLabel: string;
          victoriesCount: string;
          victoriesLabel: string;
          weekDays: {
            mon: string;
            tue: string;
            wed: string;
            thu: string;
            fri: string;
            sat: string;
            sun: string;
          };
        };
      };
    };
  };
  aiCoach: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      tag: string;
      title: string;
      desc: string;
      icon: 'mic' | 'journal' | 'roadmap' | 'harmony';
    }>;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      tag: string;
      title: string;
      desc: string;
      icon: 'flow' | 'offline' | 'sync';
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    betaButton: string;
    iosButton: string;
    pillOffline: string;
    pillZeroTracking: string;
    pillGemini: string;
  };
  waitlistModal: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    submitting: string;
    successBadge: string;
    successTitle: string;
    successSubtitle: string;
    closeButton: string;
    altAndroidText: string;
    altAndroidLink: string;
    altIosText: string;
    altIosLink: string;
    privacyNote: string;
  };
  legal: {
    backToHome: string;
    effectiveDate: string;
    lastUpdated: string;
    version: string;
  };
  footer: {
    tagline: string;
    architecture: string;
    legal: string;
    rights: string;
    subline: string;
    offlineBadge: string;
  };
}

export type Translations = TranslationSchema;
