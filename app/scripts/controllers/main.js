'use strict';

angular.module('minimumViableProductApp')
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.emailSwitch = true;
        $scope.parser = function (myString) {
            return parseFloat(myString);
        };
        $scope.submit = function (user) {
            $scope.emailSwitch = false;
            $scope.user = user;
            console.log(JSON.stringify(user));
        }
        $scope.sendEmail = function () {
            $scope.emailSwitch = false;
            alert(JSON.stringify($scope.user))
        }
        $scope.events = [
            {
                "id": 1,
                "title": 'Fahrenheit 451 by Aquila Theatre',
                "description": 'Ray Bradbury\'s distrubingly prescient, dystopian, yet ultimately hopeful tale of censorship and the narcotic effects of media comes alive in this brilliant stage adaptation from New York\'s "classically trained, modernly hip" Aquila Theatre.',
                "start": '03/19/2014 19:30',
                "end": '03/19/2014 21:30',
                "location": '1595 Pleasant St Boulder, CO',
                "locationName": 'Main Campus - Macky Auditorium',
                "price": '$14',
                "url": 'http://www.cupresents.org/events/fahrenheit-451-aquila-theatre',
                "category": 'Performing Arts'
            },
            {
                "id": 2,
                "title": 'Feel Good Fridays: Weekly guided meditation for stress relief',
                "description": 'Need a break? Want to unwind before the weekend? This drop-in group is an opportunity to be led through a powerful guided meditation to undo your stress, soothe your nervous system, and feel good. Please arrive on time so the meditation is not disturbed. There will be no late admittance.',
                "start": '03/07/2014 12:10',
                "end": '03/07/2014 12:40',
                "location": '2249 Willard Loop Drive, CO 80305',
                "locationName": 'C4C, JD Abrams Lounge (3rd Floor)',
                "price": 'free',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/7/2014&todate=3/7/2014&display=Day&type=public&eventidn=20368&view=EventDetails&information_id=105297',
                "category": 'Class'
            },
            {
                "id": 3,
                "title": 'Extreme Bowling Fridays',
                "description": 'Enjoy the energy of bowling with black lights, colored lane lights and colored pins. It\'s the ONLY Extreme Bowling in Boulder -- and fun for all! Every Friday and Saturday night from 7pm-close at the Connection Bowling, Billiards & Games. Prizes for Color Head Pin Strikes!! Note: must tell the Connection Staff before bowling.',
                "start": '03/07/2014 19:00',
                "end": '03/07/2014 24:00',
                "location": '1669 Euclid Ave Boulder, CO',
                "locationName": 'UMC Connection',
                "price": '$2.75/person/game for CU Students, $3.75/person/game for public, $2.75 shoe rental',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/7/2014&todate=3/7/2014&display=Day&type=public&eventidn=19084&view=EventDetails&information_id=96367',
                "category": 'Activity'
            },
            {
                "id": 4,
                "title": 'To Space and Back',
                "description": '“To Space & Back” takes audiences on an incredible journey from the far reaches of our known universe to our own planet. It is an extraordinary story of human ingenuity and incredible engineering, describing how the technology that transports us through space is paving the way for the devices and apps we use every day. Our curiosity and desire to see farther have generated two parallel stories: one reaching out into the depths of space and time, and the other reaching back down to our story here on Earth. “To Space & Back,” narrated by James May, explores the way each of us has been changed by the discoveries made by the international space program. From the devices we use every day to the tools that are breaking new ground in medicine and engineering, we can thank space exploration for making our modern lives possible.',
                "start": '03/08/2014 19:00',
                "end": '03/08/2014 20:00',
                "location": '408 UCB Boulder, CO',
                "locationName": 'Fiske Planetarium',
                "price": '$7 for students with ID and children, $10 for Adults',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/8/2014&todate=3/8/2014&display=Day&type=public&eventidn=20394&view=EventDetails&information_id=105381',
                "category": 'Show'
            },
            {
                "id": 5,
                "title": 'Drop-In Tai Chi',
                "description": 'This drop-in group will utilize Tai Chi exercises as a way to release stress and increase a sense of calmness in a relaxed and casual atmosphere. Group is intended to facilitate physical and psychological wellness, and will increase awareness of how stress impacts one\'s daily life, health and emotional well - being.Every Monday',
                "start": '03/10/2014 12:00',
                "end": '03/10/2014 13:00',
                "location": '2249 Willard Loop Drive',
                "locationName": 'C4C S350',
                "price": 'free for CU Students',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/10/2014&todate=3/10/2014&display=Day&type=public&eventidn=20364&view=EventDetails&information_id=105280',
                "category": 'Class'
            },
            {
                "id": 6,
                "title": 'I Love Mondays',
                "description": 'Join us each week for a free event and a great way to cure your case of the Mondays. We will plan a variety of activities such as tie-dye, cookie decorating, a live dj, pumpkin painting, and more! Take a break during classes and do something fun to start your week!',
                "start": '03/10/2014 14:00',
                "end": '03/10/2014 15:00',
                "location": '1669 Euclid Ave Boulder, CO',
                "locationName": 'North Dining Room - 1st Floor UMC',
                "price": 'free',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/10/2014&todate=3/10/2014&display=Day&type=public&eventidn=17153&view=EventDetails&information_id=88345',
                "category": 'Class'
            },
            {
                "id": 7,
                "title": 'Ralphie\'s Cooking Basics',
                "description": 'Join your fellow students to learn basic cooking techniques each week!! The class is taught each Thursday on a first come, first serve basis. Sign up for the class will be available at 4:45 p.m. at the UMC Baby Doe\'s Cafe. All materials will be provided.',
                "start": '03/13/2014 17:00',
                "end": '03/13/2014 19:00',
                "location": '1669 Euclid Ave Boulder, CO',
                "locationName": 'UMC Baby Doe\'s Cafe',
                "price": 'free',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/13/2014&todate=3/13/2014&display=Day&type=public&eventidn=19268&view=EventDetails&information_id=99932',
                "category": 'Class'
            },
            {
                "id": 8,
                "title": 'CU vs. USC Tennis',
                "description": 'Join the CU tennis team as the Buffaloes open Pac-12 Conference play against Southern California.',
                "start": '03/14/2014 13:00',
                "end": '03/14/2014 17:00',
                "location": 'South Campus Boulder, CO',
                "locationName": 'South Campus - Tennis Complex',
                "price": 'free',
                "url": 'http://events.colorado.edu/EventList.aspx?fromdate=3/14/2014&todate=3/14/2014&display=Day&type=public&eventidn=19607&view=EventDetails&information_id=102522',
                "category": 'Sporting Event'
            },
            {
                "id": 9,
                "title": 'David Grisman\'s Folk Jazz Trio',
                "description": 'David Grisman and his bass-playing son Sam, first met and played with guitarist/vocalist extraordinaire Jim Hurst a decade ago at the "Bluegrass at the Beach" camp in Oregon. In 2011, David attended one of Jim\'s remarkable solo performances in Sonoma County and was inspired to form this trio to explore some of their common roots in folk, country and jazz.',
                "start": '03/07/2014 19:00',
                "end": '03/07/2014 24:00',
                "location": '2032 14th St. Boulder, CO 80302',
                "locationName": 'Boulder Theatre',
                "price": '$27.50 GA',
                "url": 'http://www.bouldertheater.com/event/david-grismans-folk-jazz-trio',
                "category": 'Music'
            },
            {
                "id": 10,
                "title": 'Ladysmith Black Mambazo',
                "description": 'In 2013, Ladysmith Black Mambazo – led by founder and leader Joseph Shabalala – celebrates over fifty years of joyous and uplifting music that marries the intricate rhythms and harmonies of their native South African musical traditions to the sounds and sentiments of Christian gospel music. In those years, the a cappella vocal group has created a musical and spiritual alchemy that has touched a worldwide audience representing every corner of the religious, cultural and ethnic landscape. Their musical efforts over the past five decades have garnered praise and accolades within the recording industry, but also solidified their identity as a cultural force to be reckoned with.',
                "start": '03/09/2014 19:00',
                "end": '03/09/2014 24:00',
                "location": '2032 14th St. Boulder, CO 80302',
                "locationName": 'Boulder Theatre',
                "price": '$25.00 GA',
                "url": 'http://www.bouldertheater.com/event/ladysmith-black-mambazo-2',
                "category": 'Music'
            },
            {
                "id": 11,
                "title": 'The Pink Floyd Experience',
                "description": 'The vision was not to produce a stadium show. In fact, in an effort to create the true Pink Floyd experience it would be just the opposite. Two key factors were at the core of the plan: Keep it intimate. Put the legendary combination of music, sound and lights in a theatre atmosphere. And ensure the sensual attack of Floyd. Give it top a priority along with the music. They nailed it. They found the band, the lights and the sound to create THE show for the ultimate Floyd fan, and it’s called... The Pink Floyd Experience.',
                "start": '03/13/2014 20:00',
                "end": '03/13/2014 24:00',
                "location": '2032 14th St. Boulder, CO 80302',
                "locationName": 'Boulder Theatre',
                "price": '$27.50 GA',
                "url": 'http://www.bouldertheater.com/event/the-pink-floyd-experience',
                "category": 'Music'
            },
            {
                "id": 12,
                "title": 'Hometown Heroes SuperJam ft. Boulder\'s Finest Local Musicians',
                "description": 'with MEMBERS OF WEST WATER OUTLAWS, EMINENCE ENSEMBLE, GREAT AMERICAN TAXI, DEADPHISH ORCHESTRA, HOT SOUP, JET EDISON, SMOOTH MONEY GESTURE, SPRINGDALE QUARTET, TECHNICOLOR TONE FACTORY, JADEN CARLSON BAND, HOLDEN YOUNG TRIO & SMACK THOMPSON & INTUIT',
                "start": '03/06/2014 20:30',
                "end": '03/06/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$5 ADV/$7 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=91433&eid=102388',
                "category": 'Music'
            },
            {
                "id": 13,
                "title": 'Papadosio',
                "description": 'with THE MAIN SQUEEZE',
                "start": '03/07/2014 20:30',
                "end": '03/07/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$14 ADV/$16 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=90123&eid=100979',
                "category": 'Music'
            },
            {
                "id": 14,
                "title": 'Papadosio',
                "description": 'with THE MAIN SQUEEZE',
                "start": '03/08/2014 20:30',
                "end": '03/08/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$14 ADV/$16 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=90123&eid=100980',
                "category": 'Music'
            },
            {
                "id": 15,
                "title": 'Real Estate',
                "description": 'with THE SHILOHS',
                "start": '03/09/2014 20:30',
                "end": '03/09/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$14 ADV/$16 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=89938&eid=100786',
                "category": 'Music'
            },
            {
                "id": 16,
                "title": 'The Travelin\' McCourys with Bill Nershi (String Cheese Incident)',
                "description": 'with PERT NEAR SANDSTONE',
                "start": '03/12/2014 20:30',
                "end": '03/12/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$20 ADV/$22 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=89951&eid=100799',
                "category": 'Music'
            },
            {
                "id": 17,
                "title": 'Toubab Krewe',
                "description": 'with GENETICS',
                "start": '03/13/2014 20:30',
                "end": '03/13/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$13 ADV/$16 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=90901&eid=101818',
                "category": 'Music'
            },
            {
                "id": 18,
                "title": 'Sound Remedy',
                "description": 'with Mutrix, Jimmy Burns & Singularity',
                "start": '03/14/2014 20:30',
                "end": '03/14/2014 24:00',
                "location": '1135 13th St. Boulder, CO 80302',
                "locationName": 'Fox Theatre',
                "price": '$13.50 ADV/$15 DOS + $2 for under 21 tickets',
                "url": 'http://foxtheatre.frontgatetickets.com/choose.php?a=1&lid=90419&eid=101293',
                "category": 'Music'
            },
            {
                "id": 19,
                "title": 'Space Series: Our Explosive Sun',
                "description": 'History & future of space weather forecasting: On September 2, 1859 an astronomer named Richard Carrington recorded what is believed to be the first observation of a large white light flare on the Sun. About 17 hours later a huge magnetic storm erupted on the Earth. The telegraph system - the internet of the day - experienced such large induced currents in the wires that fires broke out in some offices. The Aurora Borealis extended south as far as Central America and was so bright that campers in the Rockies woke up in the middle of the night thinking it was dawn. We now call this the "Carrington Event" and recognize it as the largest "space weather hurricane" of the last several centuries. ...',
                "start": '03/06/2014 19:00',
                "end": '03/06/2014 24:00',
                "location": '900 Baseline Road, Boulder, CO 80302',
                "locationName": 'Chautauqua Community House',
                "price": '$10/$7 for Members',
                "url": 'http://www.chautauqua.com/upcoming_events.php',
                "category": 'Talk'
            },
            {
                "id": 20,
                "title": 'Peter Heller: The Dog Stars',
                "description": '"The Dog Stars" is a New York Times National best seller and A San Francisco Chronicle and Atlantic Monthly Best Book of the Year. Set in the future after a plague had crippled the planet, the novel focuses on the surviving hero and his beloved blue heeler. ',
                "start": '03/11/2014 19:00',
                "end": '03/11/2014 24:00',
                "location": '900 Baseline Road, Boulder, CO 80302',
                "locationName": 'Chautauqua Community House',
                "price": '$10/$7 for Members',
                "url": 'http://www.chautauqua.com/upcoming_events.php',
                "category": 'Talk'
            },
            {
                "id": 21,
                "title": 'Dawn Waters-Baker Art Show',
                "description": 'Dawn Waters-Baker brings her mysterious and metaphorical oil paintings to SmithKlein Gallery in Boulder, Colorado for an opening on Friday March 7th from 4 to 7 p.m. The show will continue through the end of the month.',
                "start": '03/07/2014 16:00',
                "end": '03/07/2014 19:00',
                "location": '1116 Pearl St. Boulder, CO',
                "locationName": 'SmithKlein Gallery',
                "price": 'free',
                "url": 'http://www.chautauqua.com/upcoming_events.php',
                "category": 'Art & Literature'
            },
            {
                "id": 22,
                "title": 'Policulture',
                "description": 'Local Boulder roots reggae legends Policulture throw down the vibes!',
                "start": '03/07/2014 22:00',
                "end": '03/08/2014 01:00',
                "location": '1125 Pearl St. Boulder, CO',
                "locationName": 'West Flanders Brewing Company',
                "price": 'free',
                "url": 'http://wfbrews.com/mainsite/',
                "category": 'Music'
            },
            {
                "id": 23,
                "title": 'Social Dance Class',
                "description": 'Allison Johnson teaches everything from Waltz to West Coast Swing! Group lesson from 7:30-8:25 p.m., open dancing \'til 10 p.m. Only $7 for the whole night!',
                "start": '03/11/2014 19:30',
                "end": '03/11/2014 22:00',
                "location": '1724 Broadway Boulder, CO',
                "locationName": 'The Riverside/Agora Event Center',
                "price": '$7 at door',
                "url": 'http://www.lovelaughdance.com/calendar-of-events.html',
                "category": 'Class'
            },
            {
                "id": 24,
                "title": 'Tarashea Nesbit - "The Wives of Los Alamos',
                "description": 'TaraShea Nesbit will speak about and sign her new book, The Wives of Los Alamos. About the Book: Their average age was 25. They came from Cambridge, Paris, Chicago—and arrived in New Mexico where they were forced to adapt to a rugged military town where everything was a secret. And while the bomb was being invented, babies were born, friendships were forged, and Los Alamos transformed into a community: one that was strained by words they couldn’t say, letters they couldn’t send, freedom they didn’t have. The Wives of Los Alamos is a novel that sheds light onto one of the strangest and most monumental research projects in modern history. Vouchers to attend are $5 and are good for $5 off the author’s featured book or a purchase the day of the event. Vouchers can be purchased in advance, over the phone, or at the door. Readers Guild Members can reserve seats for any in-store event.',
                "start": '03/11/2014 19:30',
                "end": '03/11/2014 22:00',
                "location": '1107 Pearl St, Boulder, CO 80302',
                "locationName": 'Boulder Book Store',
                "price": '$5',
                "url": 'http://boulderbookstore.indiebound.com/event/tarashea-nesbit-wives-los-alamos',
                "category": 'Art & Literature'
            },
            {
                "id": 25,
                "title": 'David Aguilar - "Alien Worlds"',
                "description": 'David Aguilar will speak about and sign his new book, Alien Worlds. About the Book: Could life on alien worlds exist? David A. Aguilar, space artist extraordinaire, shows readers what creatures living on extrasolar planets might be like, using science and otherworldly illustration. Just as Earth creatures have adapted to use the elements of Earth, creatures on planets orbiting distant stars would adapt to their environments. In Alien Worlds, Aguilar explores 7 types of alien-friendly worlds and the fun ways the creatures would adapt to the conditions. Accompanied by photo-realistic artwork, this book will open any kid\'s eyes to the likelihood that we are not alone. This is a FREE children\'s event, open to everybody!',
                "start": '03/12/2014 18:30',
                "end": '03/12/2014 22:00',
                "location": '1107 Pearl St, Boulder, CO 80302',
                "locationName": 'Boulder Book Store',
                "price": 'free',
                "url": 'http://boulderbookstore.indiebound.com/event/david-aguilar-alien-worlds',
                "category": 'Art & Literature'
            },
            {
                "id": 26,
                "title": 'Community Music Night',
                "description": 'Join us for a night with local musicians who aim to bring the neighborhood feel back to the stage. Performers include back-to-back and group performances with Ryan Madson (of Artful Dodgers), Geoff Kembel & Jennifer Franz, Trish Zornio (founder), Ken Stevens, Taishya Adams, Dieter Bruhn and more. Bring a friend and let us liven your night with everything from bluesy originals to covers of your favorite pop and folk tunes!',
                "start": '03/13/2014 20:00',
                "end": '03/13/2014 23:00',
                "location": '1709 Pearl St, Boulder, CO 80302',
                "locationName": 'Laughing Goat Coffeehouse',
                "price": 'free',
                "url": 'http://thelaughinggoat.com/',
                "category": 'Music'
            },
            {
                "id": 27,
                "title": 'Jeffrey Bennett - "What Is Relativity?"',
                "description": 'Jeffrey Bennett will speak about and sign his new book, What Is Relativity?. About the Book: It is common knowledge that if the Sun turned into a black hole, it would suck Earth into oblivion. Yet as astrophysicist Jeffrey Bennett points out, black holes don\'t suck. With that idea in hand, Bennett begins What Is Relativity?, an entertaining introduction to Einstein\'s theories. Bennett proves anyone can understand the basics of Einstein\'s ideas. His intuitive, nonmathematical approach gives a wide audience its first real taste of how relativity works and why it is so important not only to science but also to the way we view ourselves as human beings. Vouchers to attend are $5 and are good for $5 off the author’s featured book or a purchase the day of the event. Vouchers can be purchased in advance, over the phone, or at the door. Readers Guild Members can reserve seats for any in-store event.',
                "start": '03/13/2014 19:30',
                "end": '03/13/2014 22:00',
                "location": '1107 Pearl St, Boulder, CO 80302',
                "locationName": 'Boulder Book Store',
                "price": '$5',
                "url": 'http://boulderbookstore.indiebound.com/event/jeffrey-bennett-what-relativity',
                "category": 'Art & Literature'
            },
            {
                "id": 28,
                "title": 'Sustainability and Challenger Brands: Speaker Series',
                "description": 'As branding and mind-share remain elusive in our economy, how can a smaller organization gain a foothold in a mature business category? Does a focus on sustainability and ethics increase brand awareness and market position? How does an authentically sustainable organization combat greenwashing? What You\'ll Learn: 1. Gain insight from two long-term leaders who have built successful organizations that challenge larger organizations in their respective sectors. 2. Understand specific strategies to leverage sustainability as an asset in challenging sector leaders. 3. Discuss how to be a challenger brand within a category where sustainability is already a baseline for the category leaders (ie: GoLite and Patagonia)',
                "start": '03/13/2014 19:00',
                "end": '03/13/2014 21:00',
                "location": '1877 Broadway Suite 100, Boulder, CO 80302',
                "locationName": 'Impact Hub Boulder',
                "price": 'free',
                "url": 'http://www.impacthubboulder.com/events/sustainability-challenger-brands/',
                "category": 'Talk'
            },
            {
                "id": 29,
                "title": 'Big Paddy',
                "description": 'Big Paddy is Irish Rock. Passionate musicians performing songs of popular Irish rockers and traditional old-country ditties with a twist. We are not just a another bar band, but a hard driving soulful Irish experience. Big Paddy began in 1999 as a duo with SeanG and Jon Sherman. When Jon moved on to other endeavors, three passionate and seasoned performers gravitated to SeanG to create this new and explosive lineup. The Big Paddy sound, which their many fans have grown to love, is even bigger now and is ever evolving. Slainte!',
                "start": '03/14/2014 20:00',
                "end": '03/14/2014 24:00',
                "location": '1922 13th Street, Boulder, CO 80302',
                "locationName": 'Conor O\'Neill\'s Irish Pub & Restaurant',
                "price": 'free',
                "url": 'https://www.facebook.com/bigpaddy.colorado',
                "category": 'Music'
            },
            {
                "id": 30,
                "title": 'Model Stranger',
                "description": 'Chicago indie rock group (and CU grads) Model Stranger makes a special appearance in Boulder at West Flanders!',
                "start": '03/14/2014 22:00',
                "end": '03/15/2014 01:00',
                "location": '1125 Pearl St, Boulder, CO 80302',
                "locationName": 'West Flanders Brewing Company',
                "price": 'free',
                "url": 'http://wfbrews.com/mainsite/',
                "category": 'Music'
            },
            {
                "id": 31,
                "title": 'SynthDef Classical Guitarist and Composer',
                "description": 'Experience the music of SynthDef, a classical guitarist and composer at the Laughing Goat on Pearl Street March 14, 2014. A diverse selection of music is in store including classical pieces, classic rock (pop), contemporary and SynthDef\'s original works. The complex textures and unique style of Synth\'s guitar playing are sure to intrigue and entertain music lovers of any age and background.',
                "start": '03/14/2014 20:00',
                "end": '03/14/2014 21:00',
                "location": '1709 Pearl St, Boulder, CO 80302',
                "locationName": 'Laughing Goat Coffeehouse',
                "price": 'free',
                "url": 'https://soundcloud.com/synthdef',
                "category": 'Music'
            },
            {
                "id": 32,
                "title": 'Boulder Purim P-Party',
                "description": 'Join Flatiron Tribe for a Purim P-Party! What\'s a P-Party? Dress up like anything starting with the letter P. Pirate. Princess. Peyton Manning. Prince. Everything is fair game and creativity is key! Purchase tickets by following link below. Cost includes admission, drink ticket, and snacks.',
                "start": '03/15/2014 20:00',
                "end": '03/15/2014 24:00',
                "location": '1109 Walnut St, Boulder, CO 80302',
                "locationName": 'Absinthe House',
                "price": '$12 ADV/$15 DOOR',
                "url": 'https://boulderjcc.wufoo.com/forms/flatiron-tribe-purim-pparty/',
                "category": 'Festival'
            }
        ];
//        $scope.groups = [
//            {
//                title: "Dynamic Group Header - 1",
//                content: "Dynamic Group Body - 1"
//            },
//            {
//                title: "Dynamic Group Header - 2",
//                content: "Dynamic Group Body - 2"
//            }
//        ];
//
//        $scope.items = ['Item 1', 'Item 2', 'Item 3'];
//
//        $scope.addItem = function () {
//            var newItemNo = $scope.items.length + 1;
//            $scope.items.push('Item ' + newItemNo);
//        };
    })
;
