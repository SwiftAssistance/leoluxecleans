// Local detail for every area page. Only facts we are confident are true for
// each town are included.
// Travel notes are from our base at George Green (SL3), on Langley's northern edge.

export type AreaService =
  | 'home-cleaning'
  | 'office-cleaning'
  | 'deep-clean'
  | 'end-of-tenancy'
  | 'after-events'
  | 'specialist-cleaning';

export type AreaDetail = {
  slug: string;
  name: string;
  region: 'Berkshire & Buckinghamshire' | 'West London';
  postcodeDistricts: string[];
  neighbourhoods: string[];
  landmarks: string[];
  propertyTypes: string[];
  travel: { time: string; route: string };
  access: string;
  intro: string;
  why: { title: string; text: string }[];
  serviceNotes: Record<AreaService, string>;
  nearby: string[];
  page: AreaPageDesign;
};

// Each area page has its own design: headline, hero style, photo,
// services layout, section order and one question specific to the town.
export type AreaSection = 'services' | 'local' | 'why' | 'visit' | 'reviews' | 'faq';
export type AreaPageDesign = {
  h1: string;
  lede: string;
  hero: 'panel' | 'split' | 'photo';
  photo: 'kitchen' | 'team';
  servicesLayout: 'grid' | 'rows' | 'table';
  order: AreaSection[];
  headings: Partial<Record<AreaSection, string>>;
  faq: { q: string; a: string };
};

export const areas: AreaDetail[] = [
  {
    slug: 'slough',
    name: 'Slough',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL1', 'SL2', 'SL3'],
    neighbourhoods: ['the town centre', 'Cippenham', 'Chalvey', 'Upton', 'Manor Park', 'Britwell', 'Wexham', 'Salt Hill'],
    landmarks: ['Slough Trading Estate', 'Herschel Park', 'Salt Hill Park', 'Upton Court Park', 'The Curve'],
    propertyTypes: [
      'Victorian and Edwardian terraces around Upton and the town centre',
      '1930s semi-detached houses in Cippenham and Wexham',
      'post-war family homes in Britwell and Manor Park',
      'modern apartment blocks close to Slough station',
    ],
    travel: {
      time: 'about 10 minutes',
      route: 'Slough town centre is roughly three miles from our George Green base',
    },
    access:
      'Many of the newer flats near the station have secure entry and limited visitor parking, so tell us about fob access or a visitor bay when you book. Most streets in Cippenham, Upton and Wexham have kerbside parking.',
    intro:
      'Slough is our home town: the business address is in George Green, Slough SL3, and most of our working week is spent in SL1, SL2 and SL3. From the terraces in Upton to the flats that have gone up near the station, we already know the housing stock and how long each kind of job really takes.',
    why: [
      {
        title: 'Our own postcode area',
        text: 'Our base is in SL3, so a Slough booking means a ten-minute drive, not a cross-county trip. That makes early starts and short-notice changes much easier to fit in.',
      },
      {
        title: 'Every kind of Slough home',
        text: 'Victorian terraces in Upton, 1930s semis in Cippenham, post-war houses in Britwell and new-build flats by the station each need a different plan. We price and staff the visit to suit the property, not a one-size template.',
      },
      {
        title: 'Homes and businesses',
        text: 'Alongside homes, we clean offices and commercial units across Slough, including premises around the Trading Estate, with visits timed before or after your working day.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular home cleaning in Slough ranges from a two-bed flat near the station to a four-bed semi in Cippenham. Because we are only ten minutes away, we can usually offer the same day and time each week or fortnight, which suits households working shifts or commuting into London on the Elizabeth line.',
      'office-cleaning':
        'Slough has a large number of offices and business units, from the Trading Estate to the town-centre office blocks near the station. We clean before staff arrive or after they leave, and follow your building sign-in and alarm procedures.',
      'deep-clean':
        "Deep cleans in Slough are often for older terraces in Upton and Chalvey where kitchens and bathrooms have built up years of grease and limescale, or for flats being got ready for sale. Slough's hard water means taps, shower screens and tiles usually need proper descaling, and we allow time for that.",
      'end-of-tenancy':
        'Slough has a large rented market, from flats in the town centre to shared houses in Chalvey and Salt Hill. We clean to the standard an inventory clerk checks against: inside the oven, inside every cupboard, behind the white goods, descaled bathrooms and spot-treated carpets.',
      'after-events':
        'After a party, a family gathering or a work event in Slough, we can usually be with you quickly because we are based nearby. We clear and bag rubbish, treat spills, and put the kitchen, bathrooms and floors back in order.',
      'specialist-cleaning':
        "Specialist jobs we take on in Slough include oven degreasing, carpet and upholstery extraction, and windows. Older Victorian houses in Upton often have original sash windows and fireplaces, and the newer flats tend to have large glazed balcony doors, so we bring the right kit for each.",
    },
    nearby: ['langley', 'windsor', 'eton'],
    page: {
      h1: 'Cleaners in Slough',
      lede: 'Our home town. A ten-minute drive from our George Green base to anywhere in SL1, SL2 and SL3, for homes, rentals and business premises.',
      hero: 'panel',
      photo: 'kitchen',
      servicesLayout: 'grid',
      order: ['services', 'local', 'why', 'reviews', 'faq', 'visit'],
      headings: {
        services: 'What we clean in Slough',
        local: 'From Upton terraces to station flats',
        why: 'Why Slough customers choose us',
        reviews: 'Reviews from our customers',
        faq: 'Slough cleaning questions',
        visit: 'Getting to you',
      },
      faq: {
        q: 'Do you clean business premises on the Slough Trading Estate?',
        a: 'Yes. We clean offices and commercial units across Slough, including premises around the Trading Estate, before or after your working day. Every office quote is tailored to the size of the premises and how often you need us.',
      },
    },
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL4'],
    neighbourhoods: ['the town centre', 'Clewer', 'Dedworth', 'Old Windsor'],
    landmarks: ['Windsor Castle', 'the Long Walk', 'Windsor Great Park', 'Alexandra Gardens', 'the River Thames'],
    propertyTypes: [
      'Georgian and Victorian townhouses in the streets around the castle',
      'Victorian terraces between the town centre and Clewer',
      'post-war and modern family houses in Dedworth and Clewer',
      'riverside flats and apartments along the Thames',
    ],
    travel: {
      time: 'around 15 to 20 minutes',
      route: 'we drive in from George Green through Slough and down the A332 relief road',
    },
    access:
      'On-street parking in central Windsor is limited and busy with visitors, especially near the castle, so please let us know if you have a driveway, a permit we can use or a nearby car park you prefer.',
    intro:
      'Windsor has a mix of homes you rarely find in one place: Georgian townhouses in the shadow of the castle, Victorian terraces towards Clewer, family homes in Dedworth and riverside flats along the Thames. The A332 relief road brings us in from Slough in around a quarter of an hour.',
    why: [
      {
        title: 'Used to period homes',
        text: "Many homes near Windsor Castle are Georgian or Victorian, with original floors, sash windows and fireplaces. We use products that are safe on older surfaces and take care around period features.",
      },
      {
        title: 'Planned around visitor traffic',
        text: 'Central Windsor gets busy with visitors, so we plan arrival times and parking before the day rather than losing half an hour circling the town centre.',
      },
      {
        title: 'From Dedworth to Old Windsor',
        text: 'We cover all of SL4 on the Windsor side of the river, including Clewer, Dedworth and Old Windsor, not just the streets closest to the centre.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Windsor are a mix of townhouses near the castle, where stairs and period woodwork take extra time, and family homes in Dedworth and Clewer with busy kitchens and bathrooms. We agree a fixed day and time so you know when to expect us.',
      'office-cleaning':
        'Windsor businesses include offices, shops and hospitality spaces in and around the town centre. We clean outside opening hours so customers and staff are never disturbed, and can work early before shops open on Peascod Street and the surrounding roads.',
      'deep-clean':
        'A deep clean in an older Windsor property means paying attention to the details: skirting boards, picture rails, sash window frames, and kitchens that have been extended over the years. We move furniture where it is safe to and clean behind and underneath.',
      'end-of-tenancy':
        "Windsor has a lot of rented townhouses and riverside flats. Our end of tenancy cleans cover everything an inventory check looks at, and we work around the parking and access constraints of the town centre so the clean is finished before your handover.",
      'after-events':
        'Windsor hosts a lot of celebrations, from family parties to gatherings around big royal and civic occasions. If your home or venue needs putting back together the next morning, we clear rubbish, treat spills and clean kitchens, bathrooms and floors.',
      'specialist-cleaning':
        "Specialist work in Windsor often involves period features: original sash windows, tiled hallways, fireplaces and older carpets. We use extraction equipment for carpets and upholstery and suitable products for older surfaces, and degrease ovens on site.",
    },
    nearby: ['eton', 'slough', 'ascot', 'maidenhead'],
    page: {
      h1: 'Cleaning for Windsor homes, old and new',
      lede: 'Georgian townhouses by the castle, Victorian terraces towards Clewer, family homes in Dedworth and flats along the Thames: careful, consistent cleaning across SL4.',
      hero: 'split',
      photo: 'team',
      servicesLayout: 'rows',
      order: ['local', 'services', 'why', 'faq', 'reviews', 'visit'],
      headings: {
        local: 'Windsor homes we know well',
        services: 'Services for Windsor homes and businesses',
        why: 'Why Windsor customers choose us',
        faq: 'Questions from Windsor customers',
        reviews: 'What customers say',
        visit: 'Parking and arrival in Windsor',
      },
      faq: {
        q: 'Are you careful with period features in older Windsor homes?',
        a: 'Yes. Many homes near Windsor Castle are Georgian or Victorian, with original floors, sash windows and fireplaces. We use products that are safe on older surfaces, take extra care around period features, and check anything unusual with you first.',
      },
    },
  },
  {
    slug: 'maidenhead',
    name: 'Maidenhead',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL6'],
    neighbourhoods: ['the town centre', 'Furze Platt', 'Pinkneys Green', 'Cox Green', 'Boyne Hill', 'Holyport', 'Bray', 'Woodlands Park'],
    landmarks: ["Boulter's Lock", "Brunel's railway bridge over the Thames", 'Kidwells Park', 'the River Thames'],
    propertyTypes: [
      'Victorian and Edwardian houses in Boyne Hill and around the town centre',
      'riverside homes near the Thames and Bray',
      '1960s and 1970s family homes in Furze Platt and Woodlands Park',
      'new-build apartments from the town-centre regeneration',
    ],
    travel: {
      time: 'around 20 to 25 minutes',
      route: 'we reach Maidenhead from George Green along the A4 or the M4, depending on traffic',
    },
    access:
      'New-build apartment blocks in the town centre usually have allocated or permit parking, so let us know where we can park. Most homes in Furze Platt, Cox Green and Pinkneys Green have driveways or easy kerbside parking.',
    intro:
      "Maidenhead runs from the town centre, where new apartment blocks now stand alongside older Victorian streets, out to riverside homes near Boulter's Lock and Bray and family estates in Furze Platt, Cox Green and Woodlands Park. It is the furthest west of our core areas, so we plan Maidenhead visits as part of a route rather than a one-off trip.",
    why: [
      {
        title: 'Riverside homes understood',
        text: "Homes close to the Thames around Boulter's Lock and Bray often have large glazed doors, conservatories and garden rooms. We bring the kit for glass and hard floors as standard.",
      },
      {
        title: 'Planned routes from Slough',
        text: 'Maidenhead is around 20 to 25 minutes from our base, so we group Maidenhead visits together. That keeps arrival times reliable and is why we ask for your preferred day when you book.',
      },
      {
        title: 'Town centre flats to village homes',
        text: 'We cover all of SL6, from new-build flats in the regenerated town centre to Holyport and the villages around Bray, and quote each property on its own size and condition.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular home cleaning in Maidenhead covers everything from one-bed apartments in the town centre to larger family homes in Cox Green and Pinkneys Green. We keep the same visit day where we can, so your clean slots into a settled Maidenhead route each week or fortnight.',
      'office-cleaning':
        "Maidenhead has a busy office market, with business parks and town-centre offices close to the station. We clean outside working hours and can provide insurance and DBS documentation for your facilities team before the first visit.",
      'deep-clean':
        "Deep cleans in Maidenhead are often for riverside properties, where large windows, conservatories and garden rooms collect grime, or for 1960s and 1970s homes in Furze Platt with original kitchens. We clean inside the oven and fridge, behind appliances and along every skirting board.",
      'end-of-tenancy':
        'Many of the new apartments in central Maidenhead are rented, and tenants are often moving on to London or elsewhere along the Elizabeth line. We clean to inventory standard, including the oven, cupboards, bathrooms and carpets, and fit around your key handover time.',
      'after-events':
        'For a party at home in Maidenhead or a gathering at a riverside property, we can come in the following day to clear rubbish, deal with spills on carpets and upholstery, and clean the kitchen and bathrooms.',
      'specialist-cleaning':
        "Maidenhead's riverside homes and garden rooms mean a lot of glass, while family homes in Furze Platt and Cox Green tend to need carpets, sofas and ovens done. We bring extraction machines, degreasers and window cleaning kit for each job.",
    },
    nearby: ['windsor', 'slough', 'ascot'],
    page: {
      h1: 'Maidenhead cleaners, from the river to Furze Platt',
      lede: "Riverside homes near Boulter's Lock and Bray, new flats in the regenerated town centre and family estates across SL6, cleaned on a planned weekly route from Slough.",
      hero: 'photo',
      photo: 'kitchen',
      servicesLayout: 'table',
      order: ['why', 'services', 'visit', 'reviews', 'local', 'faq'],
      headings: {
        why: 'Why Maidenhead customers choose us',
        services: 'Maidenhead cleaning services and prices',
        visit: 'How Maidenhead visits work',
        reviews: 'Customer reviews',
        local: 'Around SL6',
        faq: 'Maidenhead FAQs',
      },
      faq: {
        q: 'Do you clean glass and conservatories in riverside homes?',
        a: "Yes. Homes near the Thames around Boulter's Lock and Bray often have large glazed doors, conservatories and garden rooms. We bring kit for glass and hard floors as standard, and can add internal and accessible external windows as a specialist clean.",
      },
    },
  },
  {
    slug: 'langley',
    name: 'Langley',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL3'],
    neighbourhoods: ['Langley village', 'Langley Marish', 'Middlegreen', 'Parlaunt Park', 'Brands Hill', 'Colnbrook', 'George Green'],
    landmarks: ['Langley Park Country Park', 'Kedermister Park', "St Mary's Church, Langley Marish", 'Langley station'],
    propertyTypes: [
      '1930s semi-detached houses',
      'post-war terraces and maisonettes',
      'newer estates and flats close to Langley station',
      'older cottages around Langley Marish and Colnbrook',
    ],
    travel: {
      time: 'a few minutes',
      route: 'George Green, where we are based, sits right on the northern edge of Langley',
    },
    access:
      'Most Langley streets have driveways or kerbside parking, which keeps visits simple. For flats near the station, just let us know about any entry codes or visitor bays.',
    intro:
      "Langley is on our doorstep. Our base in George Green sits just north of Langley, so we are a few minutes from Langley village, Middlegreen, Parlaunt Park, Brands Hill and Colnbrook. The housing is mostly 1930s semis and post-war terraces, with newer estates and flats close to Langley station.",
    why: [
      {
        title: 'Minutes from our base',
        text: "George Green is right next to Langley, so we can often fit Langley customers in at short notice, and travel time doesn't eat into your clean.",
      },
      {
        title: "Know Langley's homes",
        text: "Langley is mostly 1930s semis, post-war terraces and newer estates near the station. We know how long each typically takes, so the quote you get is the price you pay.",
      },
      {
        title: 'Out to Colnbrook and Brands Hill',
        text: 'We cover all of Langley, including Colnbrook and Brands Hill towards Heathrow, and the George Green and Middlegreen side towards Langley Park.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Home cleaning in Langley is mostly three-bed semis and terraces, plus flats near the station. Because we are based just up the road in George Green, weekly and fortnightly cleans are easy to keep on the same day, and we can usually move a visit if your plans change.',
      'office-cleaning':
        'Langley has small offices, surgeries, shops and units, with more industrial and logistics premises out towards Colnbrook and Heathrow. We are close enough to clean early in the morning or in the evening without travel adding to the cost.',
      'deep-clean':
        "In Langley's 1930s semis and post-war houses, a deep clean usually means kitchens, bathrooms and the bits that get missed for years: behind the cooker, the tops of kitchen units and window tracks. Langley has hard water, so we descale taps, showers and tiles properly.",
      'end-of-tenancy':
        "Langley's flats near the station and its family houses both see a lot of moves. We clean to inventory standard: inside the oven, cupboards and drawers, behind appliances, descaled bathrooms and vacuumed and spot-treated carpets.",
      'after-events':
        'Being a few minutes away means we can often get to a Langley home quickly the morning after a party or family event. We clear and bag rubbish, treat spills and stains, and clean the kitchen, bathrooms and floors.',
      'specialist-cleaning':
        'For Langley homes we regularly do oven degreasing, carpet and upholstery extraction, and windows. With our base so close, a single specialist job like an oven clean is still worth booking on its own.',
    },
    nearby: ['slough', 'windsor', 'eton'],
    page: {
      h1: 'Cleaners on Langley’s doorstep',
      lede: 'Our base in George Green sits just north of Langley, so we are a few minutes from Langley village, Middlegreen, Parlaunt Park, Brands Hill and Colnbrook.',
      hero: 'panel',
      photo: 'team',
      servicesLayout: 'rows',
      order: ['visit', 'services', 'reviews', 'why', 'faq', 'local'],
      headings: {
        visit: 'Right next door',
        services: 'Cleaning services in Langley',
        reviews: 'What our customers say',
        why: 'Why Langley customers choose us',
        faq: 'Langley questions answered',
        local: 'Langley streets and homes',
      },
      faq: {
        q: 'Can you fit in a Langley clean at short notice?',
        a: "Often, yes. Because we are based just up the road in George Green, travel doesn't eat into the day, so short-notice and same-week Langley bookings are usually easier to fit in. Call us and we will tell you the earliest slot.",
      },
    },
  },
  {
    slug: 'ascot',
    name: 'Ascot',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL5'],
    neighbourhoods: ['Ascot', 'North Ascot', 'South Ascot', 'Sunninghill', 'Sunningdale', 'Cheapside'],
    landmarks: ['Ascot Racecourse', 'Windsor Great Park', 'Ascot High Street'],
    propertyTypes: [
      'large detached houses on private roads',
      'period homes in Sunninghill and Sunningdale',
      'gated developments and newer executive homes',
      'flats and apartments near Ascot High Street',
    ],
    travel: {
      time: 'around 30 minutes',
      route: 'we drive from George Green through Windsor and down the A332 past Windsor Great Park',
    },
    access:
      'Many Ascot homes are on private roads or behind electric gates, so please share gate codes or access arrangements when you book. Traffic around the racecourse is heavy on race days, especially during Royal Ascot in June, and we plan bookings around those dates.',
    intro:
      'Ascot, together with Sunninghill, Sunningdale, North Ascot and South Ascot, has many large homes. Many are detached houses on private roads or in gated developments, alongside period homes and flats near the High Street. We reach SL5 from Windsor along the A332 through Windsor Great Park.',
    why: [
      {
        title: 'Sized for larger homes',
        text: 'Large detached houses in Ascot and Sunningdale often have several bathrooms, big kitchens and lots of hard flooring. We send enough people to finish in a sensible time rather than one cleaner for a whole day.',
      },
      {
        title: 'Race days planned for',
        text: 'Race days, and Royal Ascot in June in particular, bring heavy traffic around the racecourse. We schedule around the fixture list so your clean is not caught up in it.',
      },
      {
        title: 'Gates and private roads',
        text: 'Plenty of Ascot homes sit behind electric gates or on private roads. We confirm access, codes and key arrangements before the first visit, and keep them secure.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleaning for Ascot homes is often for larger detached houses with several bathrooms and reception rooms. We agree a room-by-room plan and a set day, so each visit covers the same ground and nothing gets skipped as the house gets busier.',
      'office-cleaning':
        "Ascot's offices are mostly smaller premises around the High Street and in Sunninghill and Sunningdale, including professional practices and shops. We clean before you open or after you close, so clients never see us working.",
      'deep-clean':
        'Deep cleans in Ascot tend to be big jobs: large kitchens, several bathrooms, and plenty of glass and hard flooring. We bring a team rather than a single cleaner, and clean inside appliances, behind furniture and along every skirting board.',
      'end-of-tenancy':
        'For rented homes and apartments in Ascot, Sunninghill and Sunningdale, we clean to inventory standard: ovens, cupboards, bathrooms, carpets and windows on the inside. Larger properties get a bigger team so the clean is done in a day.',
      'after-events':
        'Ascot homes often host larger gatherings, including parties during race season. The day after, we clear and bag rubbish, treat spills on carpets and upholstery, and put kitchens, bathrooms and floors back in order.',
      'specialist-cleaning':
        "Larger Ascot homes mean more carpet, more upholstery and more glass. We do carpet and upholstery extraction, oven degreasing, hard floor cleaning and internal and accessible external windows.",
    },
    nearby: ['windsor', 'maidenhead', 'slough'],
    page: {
      h1: 'Cleaning for larger homes in Ascot',
      lede: 'Detached houses on private roads, gated developments and period homes across Ascot, Sunninghill and Sunningdale, with a team sized to the property.',
      hero: 'photo',
      photo: 'team',
      servicesLayout: 'grid',
      order: ['local', 'why', 'services', 'faq', 'reviews', 'visit'],
      headings: {
        local: 'Ascot, Sunninghill and Sunningdale homes',
        why: 'Why Ascot customers choose us',
        services: 'Services for Ascot properties',
        faq: 'Ascot cleaning questions',
        reviews: 'Reviews from our customers',
        visit: 'Access, gates and race days',
      },
      faq: {
        q: 'Can you work around Royal Ascot and race days?',
        a: 'Yes. Race days, and Royal Ascot in June in particular, bring heavy traffic around the racecourse. We check the fixture list when we book Ascot visits and plan around it, so your clean is not caught up in race traffic.',
      },
    },
  },
  {
    slug: 'eton',
    name: 'Eton',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL4'],
    neighbourhoods: ['Eton High Street', 'Eton Wick', 'Dorney', 'Boveney'],
    landmarks: ['Eton College', 'Eton Bridge', 'the Brocas', 'Dorney Lake'],
    propertyTypes: [
      'historic and listed buildings on and around Eton High Street',
      'period cottages and terraces in the old town',
      'family houses in Eton Wick',
      'village homes in Dorney and Boveney',
    ],
    travel: {
      time: 'around 15 minutes',
      route: 'we come in through Slough, because Eton Bridge from Windsor is closed to cars',
    },
    access:
      'Parking on Eton High Street is very limited, so let us know if there is a space we can use. Eton Wick and Dorney are much easier, with driveways or kerbside parking on most roads.',
    intro:
      "Eton is small but different from anywhere else we clean. The High Street is lined with historic, often listed, buildings close to Eton College, while Eton Wick, Dorney and Boveney are quieter village homes. Eton Bridge over to Windsor is closed to cars, so we come in from the Slough side, about 15 minutes from our base.",
    why: [
      {
        title: 'Care with listed buildings',
        text: 'Many buildings on and around Eton High Street are listed, with original floors, panelling and fittings. We use gentle products on older surfaces and check anything unusual with you first.',
      },
      {
        title: 'Access sorted in advance',
        text: 'Parking on the High Street is tight and Eton Bridge is closed to cars, so we arrange where to park and how to reach you before the day. You get a clean that starts on time.',
      },
      {
        title: 'Eton Wick, Dorney and Boveney',
        text: 'We cover the whole of Eton, including Eton Wick, Dorney and Boveney, as well as the old town around the High Street.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Eton range from period cottages and terraces near the High Street, where narrow stairs and older floors need care, to family houses in Eton Wick. We agree a set day and keep the same plan each visit.',
      'office-cleaning':
        "Eton's businesses are mostly small shops, galleries, cafes and professional offices along the High Street. We clean outside opening hours and work around the limited parking and deliveries on the street.",
      'deep-clean':
        "A deep clean in an older Eton home means time spent on details: panelling, skirting boards, window frames and fireplaces, as well as kitchens and bathrooms. In Eton Wick's family houses, it usually means appliances, cupboards and behind furniture.",
      'end-of-tenancy':
        "For rented cottages, flats and houses in Eton and Eton Wick, we clean to inventory standard, including the oven, inside cupboards, bathrooms and carpets. We plan around High Street parking so the clean finishes before your handover.",
      'after-events':
        "After a celebration at home in Eton, Eton Wick or Dorney, we come in to clear rubbish, deal with spills and stains, and clean the kitchen, bathrooms and floors, taking extra care in older properties.",
      'specialist-cleaning':
        "Specialist work in Eton often involves older carpets and rugs, upholstery, period windows and fireplaces. We pick products and methods that suit older materials, and do ovens and hard floors too.",
    },
    nearby: ['windsor', 'slough', 'langley', 'maidenhead'],
    page: {
      h1: 'Eton cleaning, with care for historic homes',
      lede: 'Listed buildings and period cottages on and around the High Street, plus family homes in Eton Wick, Dorney and Boveney.',
      hero: 'split',
      photo: 'kitchen',
      servicesLayout: 'table',
      order: ['local', 'visit', 'services', 'why', 'reviews', 'faq'],
      headings: {
        local: 'Old town and village homes',
        visit: 'Reaching Eton',
        services: 'Eton cleaning services',
        why: 'Why Eton customers choose us',
        reviews: 'Customer reviews',
        faq: 'Eton FAQs',
      },
      faq: {
        q: 'Do you clean listed buildings?',
        a: 'Yes. Many buildings on and around Eton High Street are listed, with original floors, panelling and fittings. We use gentle products suited to older surfaces and agree anything unusual with you before we start.',
      },
    },
  },
  {
    slug: 'burnham',
    name: 'Burnham',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['SL1', 'SL2'],
    neighbourhoods: ['Burnham village', 'Lent Rise', 'Hitcham', 'Taplow', 'Burnham Beeches'],
    landmarks: ['Burnham Beeches', 'Burnham High Street', 'Burnham station'],
    propertyTypes: [
      'older village houses and cottages around the High Street',
      'post-war family homes in Lent Rise',
      'larger detached houses towards Hitcham and Taplow',
      'homes on the wooded roads near Burnham Beeches',
    ],
    travel: {
      time: 'about 15 minutes',
      route: 'we come across from George Green through Slough',
    },
    access:
      'Most Burnham homes have driveways or quiet kerbside parking. The High Street itself is busier, so let us know if there is a space we can use for village-centre homes.',
    intro:
      "Burnham sits just west of Slough, on the Buckinghamshire side of the border. It runs from the village High Street out to Lent Rise, Hitcham and Taplow, with Burnham Beeches to the north. Homes here are a mix of older village properties, post-war family houses and larger detached homes on leafy roads.",
    why: [
      {
        title: 'Village homes and bigger houses',
        text: 'From cottages near the High Street to larger detached homes towards Hitcham, we plan each Burnham visit around the size and age of the property.',
      },
      {
        title: 'A short run from Slough',
        text: 'Burnham is about a quarter of an hour from our base, so it fits easily into our regular Slough-side routes.',
      },
      {
        title: 'Woodland living, cleaned',
        text: 'Homes near Burnham Beeches tend to collect more mud and leaf debris in hallways and on floors, so we allow extra time for entrances and hard floors.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Burnham are often for family homes in Lent Rise or larger houses towards Hitcham, where several bathrooms and big kitchens need a steady weekly or fortnightly routine. We agree a set day so the clean fits around school runs and commutes.',
      'office-cleaning':
        "Burnham's businesses are mainly shops, offices and practices around the High Street. We clean before you open or after you close and follow your key-holding and alarm arrangements.",
      'deep-clean':
        'In older Burnham village houses, a deep clean means skirting boards, door frames, fireplaces and kitchens that have been extended over the years. In newer family homes it usually means inside appliances, cupboards and behind furniture.',
      'end-of-tenancy':
        'For rented homes in Burnham village and Lent Rise we clean to inventory standard: inside the oven, cupboards and drawers, descaled bathrooms, and vacuumed and spot-treated carpets.',
      'after-events':
        'After a party or family gathering at a Burnham home, we come in to clear and bag rubbish, deal with spills on carpets and upholstery, and put the kitchen, bathrooms and floors back in order.',
      'specialist-cleaning':
        'Burnham homes near the woods often need carpets, rugs and hard floors brought back after muddy winters. We use extraction equipment for carpets and upholstery, and also degrease ovens and clean windows.',
    },
    nearby: ['slough', 'maidenhead', 'langley'],
    page: {
      h1: 'Cleaners in Burnham, from the village to the Beeches',
      lede: 'Village houses near the High Street, family homes in Lent Rise and larger properties towards Hitcham and Taplow, about 15 minutes from our base.',
      hero: 'split',
      photo: 'team',
      servicesLayout: 'grid',
      order: ['local', 'services', 'faq', 'why', 'visit', 'reviews'],
      headings: {
        local: 'Burnham homes',
        services: 'Our services in Burnham',
        faq: 'Burnham questions',
        why: 'Why Burnham customers choose us',
        visit: 'Getting to Burnham',
        reviews: 'What our customers say',
      },
      faq: {
        q: 'Do you cover Taplow and the roads around Burnham Beeches?',
        a: 'Yes. Along with Burnham village and Lent Rise, we cover Hitcham, Taplow and the homes on the wooded roads near Burnham Beeches.',
      },
    },
  },
  {
    slug: 'bracknell',
    name: 'Bracknell',
    region: 'Berkshire & Buckinghamshire',
    postcodeDistricts: ['RG12'],
    neighbourhoods: ['the town centre', 'Martins Heron', 'Great Hollands', 'Wildridings', 'Harmans Water', 'Birch Hill', 'Crown Wood', 'Easthampstead'],
    landmarks: ['The Lexicon', 'South Hill Park', 'Bracknell station'],
    propertyTypes: [
      'new-town family houses on estates such as Great Hollands and Wildridings',
      'newer homes in Martins Heron and Birch Hill',
      'apartments in and around the redeveloped town centre',
      'terraced homes and maisonettes across the older estates',
    ],
    travel: {
      time: 'around 30 to 35 minutes',
      route: 'we drive from George Green through Windsor and Ascot, or via the M4 depending on traffic',
    },
    access:
      'Most Bracknell estates have driveways or residents’ parking bays, so parking is rarely a problem. For town-centre apartments, let us know about visitor parking and entry codes.',
    intro:
      "Bracknell grew as a new town, so most of RG12 is made up of planned estates such as Great Hollands, Wildridings, Harmans Water, Birch Hill and Martins Heron, with apartments in the redeveloped town centre around The Lexicon. It is the furthest of the Berkshire towns we cover, so we plan Bracknell visits as part of a route.",
    why: [
      {
        title: 'Planned around the estates',
        text: 'Bracknell’s estates are laid out in a way that makes it practical to group visits. We give you a regular day so your clean is part of a set Bracknell route.',
      },
      {
        title: 'Houses and town-centre flats',
        text: 'We clean everything from family houses on the estates to apartments near The Lexicon, and price each one on its own size and condition.',
      },
      {
        title: 'Honest about distance',
        text: 'At around half an hour from our base, Bracknell is at the edge of our area. We tell you straight away which days we can reliably cover.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleaning in Bracknell is mostly for three- and four-bed family houses on the estates, plus town-centre flats. We set a fixed day on our Bracknell route and keep the same plan each visit.',
      'office-cleaning':
        "Bracknell has a lot of office space in and around the town centre and on its business areas. We clean outside working hours and can provide insurance and DBS paperwork for your facilities team.",
      'deep-clean':
        'Deep cleans in Bracknell are often for estate houses being got ready for sale or a new tenant, where kitchens, bathrooms and the backs of appliances need a proper reset.',
      'end-of-tenancy':
        "There are plenty of rented houses and apartments in Bracknell. We clean to inventory standard, including the oven, inside cupboards, bathrooms and carpets, and fit around your key handover time.",
      'after-events':
        'After a party at a Bracknell home, we come in to clear rubbish, treat spills and stains, and clean the kitchen, bathrooms and floors. Book as early as you can, as Bracknell visits are planned on our route.',
      'specialist-cleaning':
        "Bracknell family homes regularly book carpet and upholstery cleaning, oven degreasing and hard floor cleaning. We bring the extraction machines and degreasers needed for each job.",
    },
    nearby: ['ascot', 'windsor', 'maidenhead'],
    page: {
      h1: 'Cleaners in Bracknell',
      lede: 'Family houses across the new-town estates and apartments around The Lexicon, cleaned on a planned Bracknell route.',
      hero: 'panel',
      photo: 'kitchen',
      servicesLayout: 'table',
      order: ['services', 'why', 'local', 'visit', 'faq', 'reviews'],
      headings: {
        services: 'Bracknell services and prices',
        why: 'Why Bracknell customers choose us',
        local: 'Across RG12',
        visit: 'How Bracknell visits work',
        faq: 'Bracknell FAQs',
        reviews: 'Reviews from our customers',
      },
      faq: {
        q: 'How often can you get to Bracknell?',
        a: 'We plan Bracknell visits as a route, so we agree a regular day with you when you book. For one-off cleans, call us and we will tell you the earliest day we can reliably get there.',
      },
    },
  },
  {
    slug: 'hayes',
    name: 'Hayes',
    region: 'West London',
    postcodeDistricts: ['UB3', 'UB4'],
    neighbourhoods: ['Hayes Town', 'Hayes End', 'Yeading', 'Harlington', 'Botwell', 'Wood End'],
    landmarks: ['Hayes & Harlington station', 'the Grand Union Canal', 'Lake Farm Country Park', 'The Old Vinyl Factory'],
    propertyTypes: [
      'interwar semi-detached and terraced houses',
      'post-war estate homes in Yeading and Hayes End',
      'new apartments around Hayes town centre and The Old Vinyl Factory',
      'older cottages and houses in Harlington',
    ],
    travel: {
      time: 'around 20 to 25 minutes',
      route: 'we head east from George Green past Langley and towards Heathrow',
    },
    access:
      'Many Hayes streets have kerbside parking, but some roads near the station and town centre have controlled parking. Tell us if you have a driveway or visitor permit we can use.',
    intro:
      "Hayes covers UB3 and UB4, from Hayes Town and Botwell around the station to Hayes End, Yeading and Harlington near Heathrow. The housing is mostly interwar semis and terraces, with post-war estates, and a growing number of new apartments around the town centre and The Old Vinyl Factory.",
    why: [
      {
        title: 'From semis to new-build flats',
        text: 'Hayes has everything from 1930s semis to brand-new apartments near the station. We quote each property on its own size and condition.',
      },
      {
        title: 'Used to flats with secure entry',
        text: 'Many new Hayes apartments have fob entry and concierge rules. We sort access, keys and parking with you before the first visit.',
      },
      {
        title: 'Across UB3 and UB4',
        text: 'We cover Hayes Town, Hayes End, Yeading, Wood End and Harlington, not just the streets closest to the station.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Hayes are a mix of family semis in Hayes End and Yeading and newer flats near the station. We keep the same day and plan each visit, so you know exactly what is covered.',
      'office-cleaning':
        'Hayes has offices, shops and business premises around the town centre and towards Heathrow. We clean early or late so your staff and customers are not disturbed.',
      'deep-clean':
        'Deep cleans in Hayes are often for interwar houses where kitchens and bathrooms need a proper reset, or new flats before moving in. Hard water here means taps, screens and tiles need real descaling.',
      'end-of-tenancy':
        "Hayes has a busy rented market, especially in the new apartments near the station. We clean to inventory standard and work around building access and parking rules so the job is done before handover.",
      'after-events':
        'After a celebration at a Hayes home, we come in to clear and bag rubbish, treat spills on carpets and sofas, and clean kitchens, bathrooms and floors.',
      'specialist-cleaning':
        'For Hayes homes we regularly do carpet and upholstery extraction, oven degreasing and windows, including the large glazed doors and balconies in newer flats.',
    },
    nearby: ['west-drayton', 'southall', 'uxbridge', 'northolt'],
    page: {
      h1: 'Hayes cleaners for houses and new-build flats',
      lede: 'Interwar semis, post-war estates and new apartments around the station, across UB3 and UB4.',
      hero: 'photo',
      photo: 'kitchen',
      servicesLayout: 'rows',
      order: ['why', 'services', 'local', 'reviews', 'faq', 'visit'],
      headings: {
        why: 'Why Hayes customers choose us',
        services: 'Cleaning services in Hayes',
        local: 'Hayes streets and homes',
        reviews: 'Customer reviews',
        faq: 'Hayes questions',
        visit: 'Parking and access in Hayes',
      },
      faq: {
        q: 'Can you clean apartments with concierge or fob entry?',
        a: 'Yes. Many newer Hayes apartments have fob entry, concierge sign-in or visitor parking rules. Tell us how the building works when you book and we will follow its procedures.',
      },
    },
  },
  {
    slug: 'southall',
    name: 'Southall',
    region: 'West London',
    postcodeDistricts: ['UB1', 'UB2'],
    neighbourhoods: ['Southall Broadway', 'Southall Green', 'Norwood Green', 'Dormers Wells', 'Havelock', 'Lady Margaret'],
    landmarks: ['The Broadway', 'Southall station', 'the Grand Union Canal', 'Southall Park'],
    propertyTypes: [
      'Edwardian and interwar terraced houses',
      '1930s semi-detached homes in Norwood Green and Dormers Wells',
      'large extended family homes',
      'new apartments on the former gasworks site',
    ],
    travel: {
      time: 'around 25 to 30 minutes',
      route: 'we drive in from George Green via the M4',
    },
    access:
      'Streets near the Broadway are busy and parking can be tight, so let us know about a driveway or permit. Norwood Green and Dormers Wells are usually easier.',
    intro:
      "Southall covers UB1 and UB2, from the busy Broadway and Southall Green to the quieter roads of Norwood Green and Dormers Wells. Many homes are terraced or semi-detached houses that have been extended for larger families, alongside new apartments built on the former gasworks site.",
    why: [
      {
        title: 'Big households, busy kitchens',
        text: 'Many Southall homes are extended family houses with well-used kitchens. We allow proper time for kitchens and bathrooms rather than rushing them.',
      },
      {
        title: 'Busy roads, planned arrival',
        text: 'Parking near the Broadway can be tight, so we agree where to park and when to arrive before the day.',
      },
      {
        title: 'UB1 and UB2 covered',
        text: 'From the Broadway to Norwood Green, Dormers Wells and Havelock, we cover all of Southall.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Southall are often for larger, extended family homes, where the kitchen and bathrooms are the priority each visit. We agree a room-by-room plan and keep to the same day.',
      'office-cleaning':
        "Southall has shops, offices, surgeries and community premises around the Broadway and Southall Green. We clean outside opening hours and work around deliveries and customers.",
      'deep-clean':
        'Deep cleans in Southall usually focus on heavily used kitchens, where grease builds up on extractor fans, tiles and cupboard fronts, and on bathrooms with hard-water limescale.',
      'end-of-tenancy':
        'For rented houses and new apartments in Southall, we clean to inventory standard: degreased oven and hob, inside every cupboard, descaled bathrooms and spot-treated carpets.',
      'after-events':
        'After a family celebration or party at a Southall home, we come in to clear rubbish, treat spills and stains on carpets and sofas, and clean the kitchen, bathrooms and floors.',
      'specialist-cleaning':
        'Southall homes often book oven and extractor degreasing, carpet and rug cleaning, and upholstery cleaning for well-used sofas. We bring extraction machines and commercial degreasers.',
    },
    nearby: ['hayes', 'ealing', 'hounslow', 'greenford'],
    page: {
      h1: 'Cleaning for Southall family homes',
      lede: 'Extended family houses, terraces and new apartments across UB1 and UB2, from the Broadway to Norwood Green.',
      hero: 'split',
      photo: 'kitchen',
      servicesLayout: 'table',
      order: ['services', 'local', 'reviews', 'why', 'faq', 'visit'],
      headings: {
        services: 'Southall services and prices',
        local: 'Southall homes',
        reviews: 'What customers say',
        why: 'Why Southall customers choose us',
        faq: 'Southall FAQs',
        visit: 'Parking near the Broadway',
      },
      faq: {
        q: 'Can you deep clean a heavily used kitchen?',
        a: 'Yes. Kitchen deep cleans are one of the most common jobs we do in Southall: degreasing the hob, oven and extractor, cleaning tiles and cupboard fronts inside and out, and descaling the sink and taps.',
      },
    },
  },
  {
    slug: 'uxbridge',
    name: 'Uxbridge',
    region: 'West London',
    postcodeDistricts: ['UB8', 'UB10'],
    neighbourhoods: ['the town centre', 'Hillingdon', 'Cowley', 'Ickenham', 'Hillingdon Heath'],
    landmarks: ['Brunel University London', 'Uxbridge station', 'The Chimes', 'the Battle of Britain Bunker'],
    propertyTypes: [
      'student and shared houses near Brunel University',
      'apartments in and around the town centre',
      '1930s semi-detached houses in Hillingdon and Ickenham',
      'family homes in Cowley',
    ],
    travel: {
      time: 'around 15 to 20 minutes',
      route: 'we head north from George Green through Iver Heath',
    },
    access:
      'Parking in central Uxbridge is mostly paid or permit-controlled, so let us know about visitor permits or a driveway. Ickenham and Hillingdon are usually straightforward.',
    intro:
      "Uxbridge covers UB8 and UB10, from the town centre and Brunel University to Cowley, Hillingdon and Ickenham. That makes for an unusual mix: shared houses and student lets near the university, apartments by the town centre and 1930s family homes in the suburbs. It is a short drive north from our base.",
    why: [
      {
        title: 'Student and shared houses',
        text: 'Shared houses near Brunel need a different kind of clean, especially at changeover. We know what landlords and agents check.',
      },
      {
        title: 'Close to our base',
        text: 'Uxbridge is around a quarter of an hour north of George Green, so it is easy for us to fit in regular visits.',
      },
      {
        title: 'Town centre to Ickenham',
        text: 'We cover all of UB8 and UB10, from apartments by The Chimes to family homes in Hillingdon and Ickenham.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Uxbridge range from town-centre apartments to 1930s semis in Hillingdon and Ickenham. We keep the same day and plan, so each visit covers the same ground.',
      'office-cleaning':
        "Uxbridge has a large number of offices in and around the town centre. We clean early in the morning or in the evening and follow your building's sign-in and alarm procedures.",
      'deep-clean':
        'Deep cleans in Uxbridge are often for shared houses near the university between lets, or family homes being prepared for sale. We clean inside appliances, behind furniture and along every skirting board.',
      'end-of-tenancy':
        'Uxbridge has a lot of rented property, including student and shared houses near Brunel University. We clean kitchens, bathrooms and every bedroom to inventory standard so the property is ready for the next tenants.',
      'after-events':
        'After a party in an Uxbridge home or shared house, we come in to clear rubbish, treat spills on carpets and furniture, and clean kitchens, bathrooms and floors.',
      'specialist-cleaning':
        'Specialist jobs in Uxbridge often include carpet extraction and mattress cleaning in shared houses, oven degreasing, and windows in family homes.',
    },
    nearby: ['west-drayton', 'hayes', 'langley', 'northolt'],
    page: {
      h1: 'Uxbridge cleaners for homes, flats and shared houses',
      lede: 'From student lets near Brunel to apartments in the town centre and family homes in Hillingdon and Ickenham, about 15 to 20 minutes from our base.',
      hero: 'photo',
      photo: 'team',
      servicesLayout: 'grid',
      order: ['local', 'services', 'why', 'faq', 'reviews', 'visit'],
      headings: {
        local: 'Across UB8 and UB10',
        services: 'What we clean in Uxbridge',
        why: 'Why Uxbridge customers choose us',
        faq: 'Uxbridge questions answered',
        reviews: 'Reviews from our customers',
        visit: 'Getting to Uxbridge',
      },
      faq: {
        q: 'Do you clean student houses at the end of a let?',
        a: 'Yes. We clean shared and student houses near Brunel University at changeover, covering the kitchen, bathrooms, communal areas and every bedroom to inventory standard. Landlords and agents can book directly.',
      },
    },
  },
  {
    slug: 'ealing',
    name: 'Ealing',
    region: 'West London',
    postcodeDistricts: ['W5', 'W13'],
    neighbourhoods: ['Ealing Broadway', 'Ealing Common', 'West Ealing', 'Northfields', 'Castlebar', 'Pitshanger'],
    landmarks: ['Ealing Studios', 'Walpole Park', 'Pitzhanger Manor', 'Ealing Common', 'Ealing Broadway station'],
    propertyTypes: [
      'Victorian and Edwardian family houses',
      'period houses converted into flats',
      'mansion blocks and purpose-built flats near the Broadway',
      '1930s houses towards Pitshanger and Northfields',
    ],
    travel: {
      time: 'around 35 to 40 minutes',
      route: 'we drive in from George Green along the M4 and into West London',
    },
    access:
      'Much of Ealing has controlled parking zones, so we need a visitor permit or a driveway space. Please sort this with us when you book.',
    intro:
      "Ealing covers W5 and W13, from Ealing Broadway and Ealing Common to West Ealing, Northfields, Castlebar and Pitshanger. It is known for its Victorian and Edwardian family houses, many now converted into flats, alongside mansion blocks near the Broadway. It is the furthest east of the towns we cover.",
    why: [
      {
        title: 'Period houses and conversions',
        text: 'Ealing’s Victorian and Edwardian houses have original floors, sash windows and fireplaces. We use products that are safe on older surfaces.',
      },
      {
        title: 'Permits sorted first',
        text: 'Much of Ealing has controlled parking, so we arrange a visitor permit or driveway space with you before the first visit.',
      },
      {
        title: 'Honest about distance',
        text: 'Ealing is at the eastern edge of our area. We tell you up front which days we can reliably cover so you are not let down.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Ealing are mostly for period family houses and flats in converted houses, where stairs, original floors and sash windows take extra care. We agree a set day and keep the same plan each visit.',
      'office-cleaning':
        "Ealing has offices, practices and shops around the Broadway and West Ealing. We clean outside working hours and follow your building's access procedures.",
      'deep-clean':
        'Deep cleans in Ealing period homes cover the details: skirting boards, picture rails, sash window frames, fireplaces and tiled hallways, plus kitchens and bathrooms.',
      'end-of-tenancy':
        "Ealing has many rented flats in converted houses and mansion blocks. We clean to inventory standard, including the oven, cupboards, bathrooms and carpets, and arrange parking in advance.",
      'after-events':
        'After a party in an Ealing home, we come in to clear rubbish, deal with spills on carpets and upholstery, and clean the kitchen, bathrooms and floors.',
      'specialist-cleaning':
        'Specialist work in Ealing often means carpets and rugs on older floors, upholstery, period sash windows and hard floors. We choose methods that suit older materials.',
    },
    nearby: ['southall', 'greenford', 'hounslow'],
    page: {
      h1: 'Ealing cleaners for period homes and flats',
      lede: 'Victorian and Edwardian houses, conversions and mansion flats across W5 and W13, with parking sorted before we arrive.',
      hero: 'panel',
      photo: 'team',
      servicesLayout: 'rows',
      order: ['local', 'why', 'services', 'visit', 'reviews', 'faq'],
      headings: {
        local: 'Ealing homes',
        why: 'Why Ealing customers choose us',
        services: 'Our services in Ealing',
        visit: 'Parking permits and arrival',
        reviews: 'Customer reviews',
        faq: 'Ealing FAQs',
      },
      faq: {
        q: 'Do you need a parking permit to clean in Ealing?',
        a: 'Usually, yes. Much of Ealing is in controlled parking zones, so we ask for a visitor permit or a driveway space. We agree this with you when you book so the clean starts on time.',
      },
    },
  },
  {
    slug: 'greenford',
    name: 'Greenford',
    region: 'West London',
    postcodeDistricts: ['UB6'],
    neighbourhoods: ['Greenford Broadway', 'Perivale', 'Ravenor Park', 'Horsenden', 'Greenford Green'],
    landmarks: ['Horsenden Hill', 'the Grand Union Canal', 'Greenford station', 'the Hoover Building'],
    propertyTypes: [
      '1930s semi-detached and terraced houses',
      'maisonettes and low-rise flats',
      'new apartments on former industrial sites by the canal',
      'family homes around Ravenor Park and Perivale',
    ],
    travel: {
      time: 'around 30 minutes',
      route: 'we drive in from George Green across to the A40 or via the M4, depending on traffic',
    },
    access:
      'Most Greenford and Perivale streets have driveways or kerbside parking. Newer canal-side apartments usually have visitor bays and fob entry, so let us know how access works.',
    intro:
      "Greenford covers UB6, including Perivale. Most of the area was built up in the 1930s, so it is full of semi-detached and terraced houses, with newer apartments on former industrial land along the canal. Horsenden Hill and the Art Deco Hoover Building are the local landmarks.",
    why: [
      {
        title: 'Built for 1930s houses',
        text: 'Greenford and Perivale are mostly 1930s homes. We know how long they take, so the price you are quoted is the price you pay.',
      },
      {
        title: 'Canal-side apartments too',
        text: 'Newer flats by the canal have large windows and balconies. We bring kit for glass and hard floors as standard.',
      },
      {
        title: 'Greenford and Perivale',
        text: 'We cover all of UB6, including Perivale, Greenford Green and the roads around Ravenor Park and Horsenden.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Greenford are mostly three-bed 1930s houses and newer flats by the canal. We agree a set day and room-by-room plan so nothing gets skipped.',
      'office-cleaning':
        "Greenford and Perivale have business parks, industrial units and offices as well as shops on the Broadway. We clean outside working hours and work to your site rules.",
      'deep-clean':
        "In Greenford's 1930s houses a deep clean usually means the kitchen, bathroom and all the places that get missed: behind the cooker, the tops of units, window tracks and skirting boards.",
      'end-of-tenancy':
        'Perivale and Greenford have a mix of rented 1930s houses and new apartments in managed blocks. For the blocks, we follow building rules on lifts, parking and waste, and clean every room to inventory standard.',
      'after-events':
        'Canal-side apartments in Greenford often have balconies and open-plan living rooms that take the brunt of a party. We clear rubbish, clean balcony glass and hard floors, and treat any spills on sofas and rugs.',
      'specialist-cleaning':
        'Specialist jobs in UB6 include carpet extraction in 1930s houses with original stair runners, oven degreasing in family kitchens, and floor-to-ceiling glass in the newer canal-side blocks.',
    },
    nearby: ['northolt', 'ealing', 'southall', 'hayes'],
    page: {
      h1: 'Cleaners in Greenford and Perivale',
      lede: '1930s houses, maisonettes and canal-side apartments across UB6, from Greenford Broadway to Horsenden Hill.',
      hero: 'split',
      photo: 'team',
      servicesLayout: 'rows',
      order: ['why', 'local', 'services', 'faq', 'visit', 'reviews'],
      headings: {
        why: 'Why Greenford customers choose us',
        local: 'Greenford and Perivale homes',
        services: 'Services and prices in Greenford',
        faq: 'Greenford questions',
        visit: 'Getting to Greenford',
        reviews: 'What our customers say',
      },
      faq: {
        q: 'Do you cover Perivale as well as Greenford?',
        a: 'Yes. Perivale is part of UB6 and we cover it alongside Greenford Broadway, Greenford Green and the roads around Ravenor Park and Horsenden Hill.',
      },
    },
  },
  {
    slug: 'northolt',
    name: 'Northolt',
    region: 'West London',
    postcodeDistricts: ['UB5'],
    neighbourhoods: ['Northolt village', 'West End', 'Mandeville', 'Islip Manor', 'Racecourse'],
    landmarks: ['Northala Fields', 'RAF Northolt', 'Northolt station', "St Mary's Church, Northolt"],
    propertyTypes: [
      '1930s semi-detached and terraced houses',
      'post-war estate homes and maisonettes',
      'newer flats and townhouses',
      'older houses around Northolt village',
    ],
    travel: {
      time: 'around 25 to 30 minutes',
      route: 'we drive in from George Green via the A312 or the A40',
    },
    access:
      'Most Northolt roads have driveways or kerbside parking. On estates with residents-only bays, let us know where visitors can park.',
    intro:
      "Northolt covers UB5. It is mainly residential, with 1930s semis and terraces, post-war estates and newer flats and townhouses. The old village sits around St Mary's Church, and Northala Fields, the grassy mounds beside the A40, is the area's best-known landmark.",
    why: [
      {
        title: 'Residential area, regular routine',
        text: 'Northolt is mostly family homes, so most of our work here is weekly or fortnightly. We give you a set day and stick to it.',
      },
      {
        title: 'Straightforward pricing',
        text: 'For 1930s houses and estate homes we know the typical time a clean takes, so you get a clear, fixed quote up front.',
      },
      {
        title: 'All of UB5',
        text: 'From Northolt village to West End, Mandeville and the estates near Northala Fields, we cover the whole area.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Northolt are mostly family semis, terraces and maisonettes. We keep the same day and the same plan each visit, so the house stays consistently clean.',
      'office-cleaning':
        'Northolt has smaller offices, shops and practices. We clean before you open or after you close, and follow your key-holding and alarm arrangements.',
      'deep-clean':
        'Deep cleans in Northolt homes usually focus on kitchens, bathrooms and the places a regular clean does not reach, such as behind appliances, inside cupboards and window tracks.',
      'end-of-tenancy':
        'Rented maisonettes and estate flats around Mandeville and West End often have shared entrances and bin stores. We clean the property itself to inventory standard, including oven, cupboards, bathroom and carpets, and can include the private balcony or garden doors.',
      'after-events':
        'After a birthday or garden party in a Northolt semi, or a gathering in a maisonette with shared stairs, we tidy the communal entrance as well as the home itself, then deal with spills and the kitchen.',
      'specialist-cleaning':
        'In Northolt’s 1930s houses, specialist jobs include older carpets on stairs and landings, along with laminate and tiled floors in newer townhouses and ovens in family kitchens.',
    },
    nearby: ['greenford', 'hayes', 'uxbridge', 'southall'],
    page: {
      h1: 'Northolt cleaners for family homes',
      lede: '1930s houses, estate homes and maisonettes across UB5, from Northolt village to Northala Fields.',
      hero: 'photo',
      photo: 'kitchen',
      servicesLayout: 'grid',
      order: ['services', 'why', 'reviews', 'local', 'visit', 'faq'],
      headings: {
        services: 'Cleaning services in Northolt',
        why: 'Why Northolt customers choose us',
        reviews: 'Reviews from our customers',
        local: 'Northolt homes',
        visit: 'Getting to you',
        faq: 'Northolt FAQs',
      },
      faq: {
        q: 'Do you clean maisonettes and estate homes?',
        a: 'Yes. Maisonettes, flats and estate homes make up a lot of Northolt, and we clean them regularly. We just ask you to tell us about shared entrances, stairs and where we can park.',
      },
    },
  },
  {
    slug: 'west-drayton',
    name: 'West Drayton',
    region: 'West London',
    postcodeDistricts: ['UB7'],
    neighbourhoods: ['West Drayton', 'Yiewsley', 'Harmondsworth', 'Sipson', 'Longford'],
    landmarks: ['West Drayton station', 'the Grand Union Canal', 'Harmondsworth Great Barn', 'Heathrow Airport'],
    propertyTypes: [
      'terraced and semi-detached houses',
      'new apartments along the canal and near the station',
      'village cottages in Harmondsworth and Longford',
      'family homes in Yiewsley',
    ],
    travel: {
      time: 'around 15 minutes',
      route: 'we head east from George Green through Langley and Iver',
    },
    access:
      'Most West Drayton and Yiewsley streets have kerbside parking or driveways. Newer apartments by the canal and station usually have fob entry and visitor bays.',
    intro:
      "West Drayton covers UB7, including Yiewsley and the villages of Harmondsworth, Sipson and Longford on the edge of Heathrow. It mixes terraced and semi-detached houses, new apartments along the canal and near the Elizabeth line station, and older village cottages. It is one of the closest West London areas to our base.",
    why: [
      {
        title: 'Close to our base',
        text: 'West Drayton is about 15 minutes from George Green, so regular and short-notice visits are easier to fit in.',
      },
      {
        title: 'Flexible around shifts',
        text: 'If you work shifts, at Heathrow or anywhere else, we can book any time within our working hours and keep the same slot each week.',
      },
      {
        title: 'Villages included',
        text: 'We cover Yiewsley and the villages of Harmondsworth, Sipson and Longford as well as West Drayton itself.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in West Drayton range from canal-side apartments to family homes in Yiewsley and village cottages in Harmondsworth. We agree a set day that works around shift patterns.',
      'office-cleaning':
        'West Drayton and the area around Heathrow have offices, warehouses and business units. We clean outside working hours and work to your site and security rules.',
      'deep-clean':
        'Deep cleans in West Drayton often cover kitchens and bathrooms in older houses, or new apartments before moving in. Hard water here means limescale on taps, screens and tiles needs proper treatment.',
      'end-of-tenancy':
        'West Drayton has a lot of rented property, especially near the station. We clean to inventory standard and fit around building access so the clean is finished before handover.',
      'after-events':
        'After a party at a West Drayton home, we are close enough to come in quickly to clear rubbish, treat spills and clean the kitchen, bathrooms and floors.',
      'specialist-cleaning':
        'West Drayton homes regularly book oven degreasing, carpet and upholstery extraction, and windows, including large glazed doors in newer apartments.',
    },
    nearby: ['langley', 'hayes', 'uxbridge', 'slough'],
    page: {
      h1: 'West Drayton cleaners, 15 minutes away',
      lede: 'Houses, canal-side apartments and village cottages across UB7, from Yiewsley to Harmondsworth and Longford.',
      hero: 'panel',
      photo: 'kitchen',
      servicesLayout: 'table',
      order: ['visit', 'services', 'local', 'why', 'faq', 'reviews'],
      headings: {
        visit: 'Close to our base',
        services: 'West Drayton services and prices',
        local: 'West Drayton, Yiewsley and the villages',
        why: 'Why West Drayton customers choose us',
        faq: 'West Drayton questions',
        reviews: 'Customer reviews',
      },
      faq: {
        q: 'Can you work around shift patterns?',
        a: 'Yes. If you work shifts, at Heathrow or anywhere else, we can book visits at any time within our working hours and keep the same slot each week.',
      },
    },
  },
  {
    slug: 'hounslow',
    name: 'Hounslow',
    region: 'West London',
    postcodeDistricts: ['TW3', 'TW4', 'TW5'],
    neighbourhoods: ['Hounslow town centre', 'Hounslow West', 'Lampton', 'Heston', 'Cranford', 'Hounslow Heath'],
    landmarks: ['Hounslow Heath', 'Lampton Park', 'Heathrow Airport'],
    propertyTypes: [
      'Victorian and Edwardian terraces near the town centre',
      'interwar semi-detached houses in Heston and Lampton',
      'post-war and newer homes in Cranford and Hounslow West',
      'apartments in and around the town centre',
    ],
    travel: {
      time: 'around 25 minutes',
      route: 'we drive from George Green past Heathrow along the A4',
    },
    access:
      'Central Hounslow has controlled parking, so let us know about a visitor permit or driveway. Heston and Cranford are usually easier.',
    intro:
      "Hounslow covers TW3, TW4 and TW5, from the town centre and Lampton to Hounslow West, Heston and Cranford, next to Heathrow. It has Victorian and Edwardian terraces near the centre, interwar semis further out, and a growing number of apartments in the town centre.",
    why: [
      {
        title: 'Terraces to town-centre flats',
        text: 'Hounslow’s housing ranges from Victorian terraces to new apartments. We plan each visit around the property rather than one fixed routine.',
      },
      {
        title: 'Parking planned',
        text: 'With controlled parking near the centre, we agree permits or driveway space before the first visit so the clean starts on time.',
      },
      {
        title: 'TW3, TW4 and TW5',
        text: 'We cover the town centre, Lampton, Hounslow West, Heston and Cranford.',
      },
    ],
    serviceNotes: {
      'home-cleaning':
        'Regular cleans in Hounslow cover terraced houses near the centre, family semis in Heston and Lampton, and town-centre flats. We agree a set day and the same plan each visit.',
      'office-cleaning':
        'Hounslow has offices, shops and business units in the town centre and near Heathrow. We clean outside working hours and follow your site procedures.',
      'deep-clean':
        "Deep cleans in Hounslow's older terraces cover kitchens, bathrooms, skirting boards and the backs of appliances. Hard water means proper descaling of taps, tiles and shower screens.",
      'end-of-tenancy':
        'From flats above the shops near Hounslow High Street to terraces in Lampton and semis in Cranford, there is a lot of rented property in TW3 to TW5. We clean to inventory standard and plan around permit parking so the clean is done before handover.',
      'after-events':
        'After a family celebration in Hounslow, we clear and bag rubbish, lift spills from carpets and sofas, and get kitchens back to a usable state first, from a terrace near the High Street to a semi in Heston.',
      'specialist-cleaning':
        'Hounslow sits under the Heathrow flight path, close to busy roads like the A4. Specialist jobs here include window, frame and sill cleaning, carpet and upholstery extraction, and oven degreasing.',
    },
    nearby: ['southall', 'hayes', 'ealing', 'west-drayton'],
    page: {
      h1: 'Cleaners in Hounslow, Heston and Cranford',
      lede: 'Victorian terraces, interwar semis and town-centre apartments across TW3, TW4 and TW5.',
      hero: 'split',
      photo: 'kitchen',
      servicesLayout: 'grid',
      order: ['local', 'services', 'visit', 'faq', 'reviews', 'why'],
      headings: {
        local: 'Hounslow homes',
        services: 'What we clean in Hounslow',
        visit: 'Parking and arrival',
        faq: 'Hounslow FAQs',
        reviews: 'What customers say',
        why: 'Why Hounslow customers choose us',
      },
      faq: {
        q: 'Do you cover Heston and Cranford?',
        a: 'Yes. Along with Hounslow town centre, Lampton and Hounslow West, we cover Heston and Cranford in TW4 and TW5.',
      },
    },
  },
];

export const getAreaDetail = (slug: string) => areas.find((a) => a.slug === slug);
