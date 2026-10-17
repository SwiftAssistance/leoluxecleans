// Local detail for the six core areas that get full, indexable area x service
// pages. Only facts we are confident are true for each town are included.
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
};

export const areas: AreaDetail[] = [
  {
    slug: 'slough',
    name: 'Slough',
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
    nearby: ['langley', 'windsor', 'eton', 'burnham'],
  },
  {
    slug: 'windsor',
    name: 'Windsor',
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
  },
  {
    slug: 'maidenhead',
    name: 'Maidenhead',
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
    nearby: ['windsor', 'slough', 'burnham', 'ascot'],
  },
  {
    slug: 'langley',
    name: 'Langley',
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
    nearby: ['slough', 'windsor', 'eton', 'west-drayton'],
  },
  {
    slug: 'ascot',
    name: 'Ascot',
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
      'Ascot, together with Sunninghill, Sunningdale, North Ascot and South Ascot, has some of the largest homes we clean. Many are detached houses on private roads or in gated developments, alongside period homes and flats near the High Street. We reach SL5 from Windsor along the A332 through Windsor Great Park.',
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
    nearby: ['windsor', 'maidenhead', 'bracknell', 'slough'],
  },
  {
    slug: 'eton',
    name: 'Eton',
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
  },
];

export const getAreaDetail = (slug: string) => areas.find((a) => a.slug === slug);
