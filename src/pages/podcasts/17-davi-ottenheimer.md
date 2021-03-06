---
type: podcast-episode
status: published
slug: /podcast/17-davi-ottenheimer
featuredImage: '../../images/podcast-images/17-davi-ottenheimer.png'
guid: publicinfrastructure.org/podcast/17-davi-ottenheimer
title: Davi Ottenheimer, Inrupt and SOLID
subtitle: Presented by the Initiative for Digital Public Infrastructure at UMass Amherst
publicationDate: 2021-03-17
author: Initiative for Digital Public Infrastructure
season: 1
episodeNumber: 17
episodeType: full
excerpt: Davi Ottenheimer joins us to explain SOLID, a revolutionary data protocol created by inventor of the World Wide Web Sir Tim Berners Lee. Davi is a VP of Trust and Digital Ethics at Inrupt, the company implementing SOLID as both a user-facing technology and for large-scale infrastructural systems in the UK and India. At its core, SOLID is a framework that gives users complete and exclusive ownership of their own data, and Davi tells us what this could mean for everything from health care to band practice. Davi is also a long-time blogger at his site Flying Penguin.
url: 'https://archive.org/download/reimagining-the-internet-17.-davi-ottenheimer-inrupt-and-solid/Reimagining%20the%20Internet%2017.%20Davi%20Ottenheimer%2C%20Inrupt%20and%20SOLID.mp3'
embed: 'https://archive.org/embed/reimagining-the-internet-17.-davi-ottenheimer-inrupt-and-solid'
youtubeEmbedURL: 'https://www.youtube.com/embed/hVTlhdnvrx8'
duration: 1720
size: 65600000
explicit: false
categories:
  - Technology
  - Government
  - Science
---

[Davi Ottenheimer](https://twitter.com/daviottenheimer) joins us to explain [SOLID](https://inrupt.com/solid/), a revolutionary data protocol created by inventor of the World Wide Web Sir Tim Berners Lee. Davi is a VP of Trust and Digital Ethics at [Inrupt](https://inrupt.com), the company implementing SOLID as both a user-facing technology and for large-scale infrastructural systems in the UK and India. At its core, SOLID is a framework that gives users complete and exclusive ownership of their own data, and Davi tells us what this could mean for everything from health care to band practice. Davi is also a long-time blogger at his site [Flying Penguin](http://flyingpenguin.com).

<h2>Transcript</h2>

*Ethan Zuckerman:*

Hey everybody. Welcome back to Re-imagining the Internet. I remain your host, Ethan Zuckerman. I'm here today with Davi Ottenheimer, Who's the vice president of trust and digital ethics at Inrupt. Inrupt is a company, working on decentralizing the web using some ideas and models put forward by Tim Berners-Lee who's responsible for inventing the web in the first place.

Davi is someone who's been involved with teams that have been operating and sometimes breaking information security for more than 25 years. He's a terrific writer, a very active blogger over at flyingpenguin.com and he's really the best person I could imagine to tell us what Inrupt is up to and why Solid is a very different way of thinking about how we could rebuild the web for the next generation. Davi, Thanks so much for being with us.

*Davi Ottenheimer:*

Thanks for having me. Pleasure.

*Ethan Zuckerman:*

So tell me a little bit about how you found yourself working with Inrupt and what is Inrupt? How long have you been in this position? How long has Inrupt been around?

*Davi Ottenheimer:*

Great questions, because it really started, I think, at the end of that question. Sir Tim had a vision 10 years ago or so, and I think he started talking about it publicly and began developing this as an academic exercise about what the web really should be, frustrated with what it had become.

That turned into I think about two years ago, a enterprise or an enterprise effort, right, a startup with John Bruce and John Bruce brought in Bruce Schneier. And then Bruce Schneier asked me to join where I'd been working on an encryption system, an end to end encryption system for a very large database vendor, pioneering, I guess, for its time, but I was building into the driver layer so you could both do interesting queries and analysis of data, but also protects the data from anybody running the service, because I felt that that was the core issue of the time.

And I'd been working on plans and processes for this for a long, long, long time. Anyway, I was honored to be asked by Bruce Schneier to come help figure out the next iteration of the web and that's basically how it all came together. So it's been almost two years for me. It's been a while.

*Ethan Zuckerman:*

And just so we can kind of contextualize this for people who may not know the same people that we know. Bruce Schneier is one of the best respected not only cryptographers out there and sort of teachers about internet security, he's also this deeply thoughtful leader on sort of questions of how to make the internet safe and secure.

When he joins something like Inrupt, which is founded quite literally to take Tim Berners-Lee's, Sir Tim Berners-Lee's ideas about the next generation of the web it's something that we all sort of take seriously. Aside for the personalities involved, why is it important that we start taking Solid seriously?

*Davi Ottenheimer:*

Well, it reminds me of the excitement of the early web, which I owe my entire career to. I mean, 1994 was when I really got started and I jumped out of academia, my background's in social science, history, philosophy, ethics, and I went full force. I'd done a lot of hacking and sort of typical college stuff at the time. And I went into the web and it's become my life.

The excitement I felt at that time when everybody was getting on the web, building web servers, putting the content out, really changing the way that we interact as humans through this concept of linking to each other and having the ability to publish our own content whenever we want, however we want.

That's what it feels like again today with Solid. And I feel like the changes that we went through when we were at the time, I shared a lot of this sentiment I think with Sir Tim and with Bruce and others is there's a centralization effort and some of it was necessary for the way the economics of our industries work. So there was a centralization because it benefited certain people, but that really wasn't necessary for what the end goal which you started with, which is much more like the printing press or publication of ideas.

It's good for certain industries, but not good for humanity. So it's exciting in the sense that we have a chance to sort of go back to the fundamentals and think about what do we want a printing press to really be? What do we want the wireless set to be when you set up a radio tower and can broadcast? What do you want to really encourage in terms of innovation and market innovation?

*Ethan Zuckerman:*

So, let's back up a little bit to the early web and then based on sort of our understanding of the early web, talk about how Solid sort of deals with those changes and complexities, right? You and I are both bloggers. We both, I suspect either at the moment or at some point in the past had a web server that we had full absolute authority and control over.

I recently decided that I just couldn't keep up with the security patches on the server that I was keeping up. I moved it over to WP engine. So now I have a space that I control, but it's on somebody else's platform. All of that is pretty radically different from a world like Facebook or like Twitter, where we're participating in an environment that someone has full ownership and control over.

The flip side, of course, is in that early version of the web, but it was a printing press that we individually had access to, but it was tough to share it with anybody else. It was not super easy to invite all your friends in, onto your web server without a good deal of security risk. Some of what seemed to happen with this shift towards user-generated content, social networks was essentially saying, let's make it perhaps more democratic, allow more people in, but in the process, radically change the power equation. Suddenly it's now being controlled by the platform owner.

You're now talking about a model that really has sort of three components to it and I'd love it if we could sort of pick it apart a little bit. What's a Solid app look like? Give me an example of something someone's trying to write on top of Solid and how does that app interact with Pods, which I assume with the data store and with identities?

*Davi Ottenheimer:*

That's right. And there's so many examples because the world of app possibilities is endless. But let me give you just a few basic ones. Let me start with a chess game because it's a simple example of how two people can interact with each other by doing moves.

So I move, you move back and forth. Each of our moves are stored locally in our Pod. Now you've got all your moves, I've got all my moves. We install a second chess app. We can still play the game, continue on where we left off or replay the game as it was because the moves are stored individually by us. We're not taking the other person's moves. We're only storing our own moves and we're still interacting.

This is similar in the chat, if you will. I speak to you, you speak to me. Even in this video recording your video is recorded to your Pod, my video's recorded to my Pod and they can be stitched back together. Musicians playing, a guitarist can have his track story to his Pod. The drummer can have her drums stored to her Pod and you can mix and remix. So an app can simply be mixing channels, mixing samples, mixing games, mixing, right, and applying these things. That's why it's allowing the interconnectivity of information is the ultimate opener to worlds, collaborations, and innovations.

*Ethan Zuckerman:*

I'm playing drums, you're playing guitar. We invite a third person to play bass. Her baseline is on her Pod. My drum track is on my Pod. Your guitar track is on your Pod. The app is the jam session where we're sort of able to bring them together. And depending on how permissions work for all of this, I assume I could also have a copy of your guitar track or not. Right? You could rescind it, you could sort of pull it back.

One of the things that has seemed very challenging about Solid in some ways is that it implies a vastly more sophisticated permissions model than many of us are used to thinking of. When I go into those apps, when I sort of interact with something that is trying to be as simple as a television, or as simple as the idiot light going on, how do I do that while dealing with this idea that I am authorizing or de authorizing data streams, data access at different moments in time?

*Davi Ottenheimer:*

Well, it's a matter of balancing people's lives to decide where they want to be on the spectrum. And I think that's the key to understanding all of this. I mean, for some people they need to be in a world like a Facebook or Twitter, where everything is presented to them and they just type in a box and click send.

For other people that would never suffice. If they don't build the server from scratch themselves, why are they even putting their words on it? So in between are lots of options. And I try to represent this in many different ways, but in a spectrum, I think is the best way to think of oneself as where do you want to be? And it's not one decision for everything, right? So when I play soccer, I may not want to think about anything, but when I go to work, I want to have total control over everything that I do, right?

So it's just the app can be just looking at your own data, right? It doesn't have to be looking at a shared experience, such as a band. It can just be me individually wanting to see my own tracks and exploring that. I think, how do we achieve the greatness of flexibility and simplicity, insecurity, and trust such that people can really be themselves on that spectrum, whether it be alone, whether it be a service provided for them, whether it be shared, whether it be they control absolutely everything. And that's what's missing today is when you get into something you can't get out and you don't have any choices.

*Ethan Zuckerman:*

What's very challenging about Solid for people to sort of understand is it's really a very different paradigm than we're used to. We're sort of used to this notion that a service is a place and that place has certain data about us and we have frankly no rights to retrieve that data, right?

Facebook sort of tosses us a bone and we can appeal to download our historic Facebook transactions. Twitter has the ability to get the Twitter archive, but that's very different from the model that you're talking about, where in theory, you could simply revoke an application's permissions to work with your data. You could pull things back, even after having agreed to something.

Help me understand the identity piece of things, which sounds like it's become a much more visible part of the Solid universe since the last time I talked with Sir Tim about this. How do identities work in this space? How do I find you in a Solid world?

*Davi Ottenheimer:*

The simplest form is that you have a web ID. So in Sir Tim's version everybody has an identity on the web. But one of the things we have to recognize is that identities are very complicated animals. So we've already been dealing with issues where people step off a boat, no records, what is their identity? You assign one or there create one. So that's essentially its own identity space. And then that gets transitioned into when they become a citizen of a country, an existing identity space, they get issued a passport, right?

And so there's a long, long history of what that means in legal vernacular. But then you also have very large identity repositories. Google, for example. So could you go work with a Google that has a Google identity if you wanted to have a Pod? Absolutely. There are questions of Federation. So could you use a web ID in your Pod to use your Google data? We envision all of that.

In fact, Okta is a good example of a company that's trying to federate across lots of different stores. But the point is that we're going to try to shift from a place where your identity provider is essentially the center of your world, where once you put your identity on it, you try to connect everything to that identity, to a place where your actual identity, your true human identity is the source of your identity and you occasionally add identity connections, like you get a driver's license to drive, or you get a Google identity to use Google, but that is not your identity. That is a representation of your identity.

In fact, so much. So we're very familiar with cookies and marketing, trying to market to us based on what they perceive us to be. The Pod gives us the ability to move from a right to delete to a right, to be understood. In other words, if I go into a store, like I go into an Ikea and I say, "I want to have, I don't know, pink couches for my decor." If I go back the next day and they say, "Well, you said you liked pink couches, so how about some pink chairs?" I might want to say, "No, that is not me." And in my Pod, I can actually shift my dials to say, "I was shopping for my mother or my father. My father likes pink. And today I'm actually this person."

So identity becomes linked to your actual data, your actual self and the right to be understood, which is connected to identity stores. By decoupling the identities that you create in identity places, you can then be a citizen of the United States and a forward on a soccer team and a member of your community. You volunteer for a role, all of this ties in, and then you can in a way, shape how people can see which data based on the role that they're coming with and the role that you have. So it really does represent much more of the human condition unless an identity is offered to you. And now everything tied to it is determined by the identity writer.

*Ethan Zuckerman:*

Right, right. So the pink couch example reminds me a little bit of Doc Searls work on vendor relationship management, where as opposed to being a customer and having the vendor manage your data, and you have no real control over how they see you as a customer. You're managing your relationship with vendors. You can change your mind and no longer be interested in pink couches or frankly pink couches had nothing to do with your identity in the first place.

But even beyond that, it sounds like there's a radical shift in understanding that people sort of have to get their heads around. When I am using Google services. And to be clear, I use a lot of them, google is providing multiple things. Google is providing an identity. It has some belief that that identity hashes to a person in the real world at the very least it hashes to a mobile phone number and possibly a couple of other email addresses.

Google is a trusted enough identity broker that I can use my Google identity, not only across Google services, but across some other services. I can use my Google email as an identity that allows me to use some other services. I also have my services at Google. I use my email there, I do my calendaring there. Those are apps that are running on my data, and Google of course, has my data for all of those different things.

Sounds like Solid is essentially decoupling all of these things, right? So now I have my data. Either I have it on a Pod that I run on my machine or my little corner of the Cloud, or even conceivably I buy from Google at some point in the future. I have apps, some of which might be run by Google or somebody else that can operate on that data with my permissions.

And I have an identity layer, which theoretically could be provided by Google, but might also be provided through something like a net ID, which it sounds like you're thinking about being much more analogous to the sort of right to identity that is probably not firmly established as a human right, but increasingly in terms of refugee issue seems to be emerging as a form of right. That right to personhood instead of identity coming out of it.

Assuming that I'm roughly right in that sort of outline, how do we get people to make that conceptual shift? Those are, those are some big changes in how we think about things.

*Davi Ottenheimer:*

Well, yeah. So being the national contrarian I am, I would actually say that that's what we were, and we've had to make this rapid shift into this world that we don't actually like to live in. It's like the keyboard learning querty. How do we teach people to write with a pen? Or how do we teach people to use voice in a world of querty? It's like so weird that we have to learn to use the keyboard and we've gotten so accustomed to the Google way of doing things. We don't even realize how bad it is for us.

I mean, the discussions I see today, for example, around school, or they say, well, "We've got a Fitbit and we've got all these trackers." And so the students running around on a court are going to generate all this, I mean, a basketball court are going to generate all this data, which the school is going to monetize. And I just think, "What?"

If they type on a keyboard and a computer or a typewriter for that matter, or with a pen and they write a paper out, they use technology, but the school doesn't say we're going to monetize your paper because it's ours. Yet somehow people have gotten into the mindset that the machine generating information as an augment of the human, that data is no longer the person's who's generating the data. Every footstep on the basketball court is not owned by the person who took the footstep?

So that's what's, I think a more natural condition would just be to think that that is their data and the fact that we've shoehorned ourself, pardon the pun into a world where we think we have to live this other way.

*Ethan Zuckerman:*

I completely I agree with you about the weird nature of that world. I completely agree with you about the ways in which the assumption that all actions are monetizable and they are within the purview of the people who have created the platform. Where I think I might question a little bit is actually going back to your basketball example where, the notion that you own your steps on the basketball court makes sense, though in some ways you're playing basketball with a set of other people, and you could argue that they have some ownership of your steps as well.

And as much as you are engaged in a collaborative experience, I would argue that whoever's providing the court and the hoops probably has some rights in that as well. They certainly have a right to exclude or include. And I'm not sure that I even want to disagree with their right to put a side-

*Davi Ottenheimer:*

Absolutely.

*Ethan Zuckerman:*

... at the end of the basketball court. So, the only reason I'm picking on your analogy is I think what's so hard is that things really get complex when it's not just a single user's point of view, it's a whole bunch of entities sort of involved with these relationships. And that's why I get really interested when we start thinking about something like the jam example. We build an app, it allows three of us to jam, and maybe it throws in an AI fourth player because we always wanted a sax player to play with. Those questions about data ownership to me get very complicated over time.

*Davi Ottenheimer:*

Well, I think lawyers will have to figure this out ultimately, because it's going to be a representation of each relative society that decides how ownership is doled out. But the point again is the flexibility is there. It's not that you have to make a decision. So you figure it out in the spectrum where you are. So you're exactly right.

If I take a photograph of someone's building, they may try to sue me because it's their building, their visage. But I might say, "No, no, it's a public building that I can take photographs of." And this is stuff I've dealt with personally across many different cultures. In fact, I've been in some fairly hairy situations where the military has come after me for taking a photo in foreign countries and I've narrowly escaped, taking my camera with me, but deleting the images sort of thing.

It's very familiar to me in the sense that, and you're right, the court itself could have a sensor. That data may be owned by the school. The individual may have a sensor. That data may be owned by the individual. And so a lot of it has to deal with how the information is collected. We've seen court cases where police go into cars a year after they'd been in a crash, they pull the black box with all the sensor data, and they say, "You turned on the brakes at this moment and you said you turned it on at this moment, but the sensor proves you wrong." And the judge says, "Well, that's public information because a brake light is something anyone can see." Even though it was pulled out of a black box in a wreck, in a junkyard a year after the incident, they're talking about it as though they just looked at it yesterday and it's irrefutable integrity-based information.

And these are things already in the court system about who owns, but I'll go one step higher. We have issues where we have intimate relationships where essentially two people are one and then they get into a dispute and they divorce, or they separate. And we have to treat them as two. So who owns the data? This is not something I'm going to solve. This is something that courts are going to solve, but the difference is the technology can represent them as separate or together, which is not the case today.

*Ethan Zuckerman:*

But let's talk about who's building with Solid right now because I think people who get their heads around how Solid works are enormously excited about it. I know that I'm enormously excited about it. As I understand it, Inrupt in many ways has been going after massive, massive organizations. The Indian Railway, the British National Health System. You've just given a passionate case that Solid is about the individual. Those are enormous institutions with some of the biggest IT challenges of anyone in the world. Why is Inrupt starting there first with Solid?

*Davi Ottenheimer:*

Oh, that's an interesting question because it's a function. First of all, the attention that we're getting. You have the Indian Railway coming to you and saying, "We have to move a billion people around. That's a lot of people." So it would be useful to try to individually go to individual one by one billion people, but you may never get there by the time... I'm an old man already, so I may not be around by the time I get to the halfway through.

Whereas if you go to a representation of those people, who's going to deal with them already in the way that they lived their lives. You can actually get much, further, much more traction and a much quicker timescale. Eventually people will get it wider too, but really to put it this way, I once tried to help solve an issue they had in China with the way that the railway tickets were being issued. They were too slow. People would walk away from the kiosks.

So instead of trying to go to each individual and say, "We can write an app for you to get on the train..." This is actually a question that sort of gets to me around the Uber phenomenon. Instead of writing an app that was supposed to get everybody into Uber and get individuals into Uber, uber could have just written a better distribution model for everyone that already had car services.

*Ethan Zuckerman:*

Interesting. Okay.

*Davi Ottenheimer:*

And I don't think they're mutually exclusive either. And I think we can do both, but I think that in terms of leverage, it's better to enable the people that already have on the ground technology solutions. When the NHS says we want to fix our healthcare system, who would we to be to say no to fixing the entire NHS healthcare system, because we're really focused on trying to get 1,000 or 10,000 people interested to write apps.

*Ethan Zuckerman:*

Certainly one of the places that people are asking a lot of questions about whether existing models work are contemporary social media. We have a group of people asking whether there are dark patterns that are leading towards addiction or leading people to spend too much time with these platforms. We have, what I think are very legitimate critiques about whether existing social problems like polarization and such are being pushed into new communities and aggravated by social platforms. Is the future of social media on Inrupt's agenda? Are people thinking about Solid-based approach to something that's an alternative to Facebook or YouTube or something similar?

*Davi Ottenheimer:*

Yeah, I think again, Solid can do anything the same way the web can do anything. I mean, if you had said in 1994, that we're going to have shopping carts or even that even that we'll chat on the web, I don't think people would have seen it because back then we use chat apps, phone, and lots of stuff in Unix and VMS for that matter. There's lots of ways to chat.

But if you think in terms today of what's possible, since we know all of that history, then there's no question that linking and interconnectivity includes social media and chat. But I think it's important to note, again, there's a spectrum and there's two sides to all of this. Some people want everything to be archived forever. So if I have all of my chats since forever, the same way email, since forever in my Pod, that can serve a very useful purpose as an academic, as a scholar of a university.

I want to have all my chats, or president of United States, all the chats recorded and something that's in perpetuity put into a museum. That's very powerful, but some people want it to be all erased. They want to have absolutely no record. They want to be anonymous all the time. We can serve both of those. And that's something that you don't find right now, because if you get into a Twitter or you get into a Facebook and you get into the terms of service, they say it won't be private. And this is what happens if you don't want the data to be stored, this is how we delete, even though it doesn't get deleted or how...

I mean, one of the biggest crimes I think is like, when WhatsApp will say it's end-to-end encrypted, but there's a third party key that's in there and they actually can flip a switch and they encrypt everything with a third key and they can read everything that was supposedly "end-to-end encrypted". And then it's stored in the back end where someone else can look at it. And so it's not really safe. It's just mind boggling how Facebook was able to not take responsibility for any of the words they use, basically.

So this opportunity is for people who want to build a service that is responsible, that does represent people who care and does take care of people, because it does think about responsibility as a value and a virtue. Yeah, it's definitely on the roadmap. I mean, not just as an individual writing now that they can use it within their social group, but maybe healthcare can write an app within the healthcare system. So they don't have to put people on a Facebook chat.

*Ethan Zuckerman:*

Mm-hmm. Sure, sure.

*Davi Ottenheimer:*

They can use the health care chat. And because it's standards-based, you don't have to give up or use separate identities. You can use a single self to talk to different resources using the social media.

*Ethan Zuckerman:*

And you can build something that's HIPAA compliant and is safe within those spaces-

*Davi Ottenheimer:*

Exactly.

*Ethan Zuckerman:*

... because I think many people, as they've tried to figure out how to go into a virtual world have discovered that there's a real intersection between these tools that we use somewhat casually and some of the regulations that are well-intended even if they sometimes get in the way of those actual practices.

Davi Ottenheimer is the vice-president of trust and digital ethics at Inrupt. He's got a fascinating and challenging job. Inrupt is developing Solid, an amazingly ambitious and thoughtful model for re-decentralizing and sort of recreating the web. It is unsurprisingly led in part by a Sir Tim Berners-Lee. It's something that I think a lot of us are watching very, very closely. Davi, thank you so much for making time for this conversation.

*Davi Ottenheimer:*

Thank you, Ethan. It's been a pleasure. Thank you for having me.