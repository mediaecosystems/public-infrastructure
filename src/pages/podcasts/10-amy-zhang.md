---
type: podcast-episode
status: published
slug: /podcast/10-amy-zhang
featuredImage: '../../images/podcast-images/10-amy-zhang.png'
guid: publicinfrastructure.org/podcast/10-amy-zhang
title: Amy Zhang, University of Washington
subtitle: Presented by the Initiative for Digital Public Infrastructure at UMass Amherst
publicationDate: 2021-01-13
author: Initiative for Digital Public Infrastructure
season: 1
episodeNumber: 10
episodeType: full
excerpt: Amy Zhang from the Social Futures Lab at University of Washington joins the podcast to talk about the a next version of the internet where groups of users are empowered to govern themselves and help each other to deal online harassment. Amy tells us how she’s pushing HCI and Social Computing scholarship in exciting new directions, to ask what sorts of new practices might make up a post-mega-platform internet.
url: 'https://archive.org/download/reimagining-the-internet-10.-amy-zhang-university-of-washington/Reimagining%20the%20Internet%2010.%20Amy%20Zhang%2C%20University%20of%20Washington.mp3'
embed: 'https://archive.org/embed/reimagining-the-internet-10.-amy-zhang-university-of-washington'
youtubeEmbedURL: 'https://www.youtube.com/embed/P0H1m14Krmc'
duration: 1540
size: 58800000
explicit: false
categories:
  - Technology
  - Government
  - Science
---

[Amy Zhang](https://homes.cs.washington.edu/~axz/) from the [Social Futures Lab](https://social.cs.washington.edu/) at University of Washington joins the podcast to talk about the a next version of the internet where groups of users are empowered to govern themselves and help each other to deal online harassment. Amy tells us how she’s pushing HCI and Social Computing scholarship in exciting new directions, to ask what sorts of new practices might make up a post-mega-platform internet.

In this interview, Amy refers to her [PolicyKit](https://policykit.org/) and [SquadBox](https://squadbox.org/) projects, and Ethan mentions Julian Dibble’s classic essay [“A Rape in Cyberspace.”](http://www.juliandibbell.com/articles/a-rape-in-cyberspace/)

<h2>Transcript</h2>

*Ethan Zuckerman:*

Hey, everybody. Welcome back to Reimagining The Internet. This is a real treat for me. I am thrilled to have my friend Amy Zhang here. Amy is just finishing her first quarter as an assistant professor of computer science and engineering at the university of Washington. She's the head of the Social Futures Lab there.

The funny thing with Amy is that she just has this amazing record of cool projects that she's been developing for years and years and years. I had the pleasure of working with her when she was a student with David Karger's lab at MIT. And she's really one of my favorite people, as far as thinking about clever ways to make the internet a better place. Amy welcome. I'm so glad to have you with us.

*Amy Zhang:*

It's so good to talk to you, Ethan.

*Ethan Zuckerman:*

One of the things that we're trying to do with this podcast is bring on people who are actively involved in making the internet a better place. And we're really asking them a simple question, which is what's wrong with the internet and what are you trying to do to fix it?

So I want to start there with you with the promise that I'm going to ask you about some of the specific projects that you've worked on, what's wrong with the net and how do you want to make it a better place?

*Amy Zhang:*

And what a great question. And this is really kind of the core of my research agenda at Social Futures Lab in university of Washington. And I think one of the things that I really think about kind of starting during my PhD is how the platforms that we use today for social interaction aren't all that different from each other. And they haven't really changed that much in years, sometimes even decades.

There are just so many assumptions that we have about how social media works that just haven't really been questioned. And I think there's just a lot of room for really re-imagining some of the things that we kind of take for granted. So, I can give some examples.

So for instance, one of the things I work on is conversation design, almost every single place that we have online discussion in text form today, you have one of two options, you can do threaded discussion, or you can do unthreaded discussion and then that's it. What about other types? What about circles? Why do conversations always grow online? How come they never shrink or merge or these kinds of other things that could potentially happen?

*Ethan Zuckerman:*

I know you've done a lot of work on summarization, taking really long, complicated conversations and trying to sort of bring them down through a combination of automated and non-automated means. So, that's a different shape of conversation. What would it look for a conversation to be in a circle?

*Amy Zhang:*

I think this is one of those things where it's like in our discussions that we have with each every day, we have different structures of conversation where we rehash things that were said, where we summarize things that other people have said to understand better what they meant.

And I think there's just, conversation is just one of the aspects, but I think there are so many things about social media that we just really take for granted. And I think there's just a lot of room for changing that up. I can give another example, which is one of our latest projects, which is rethinking the dominant governance model in a lot of social tools today, which is this very kind of top-down, admin mod users model.

And you see that everywhere, Reddit, sub-Reddits, mailing lists, Facebook groups, and you can go all the way back to Unix servers and file administration.

*Ethan Zuckerman:*

Early mailing lists, right? Whoever was the administrator, sort of set the rules for it. Sure.

*Amy Zhang:*

Right. And it's like, what assumptions are we baking into that? Do our communities necessarily need to be governed in an autocratic way? What about things like democracy? Couldn't our social infrastructure better support alternative forms of governance? So, this was one of our latest projects called PolicyKit, which is actually trying to put some of those governance design questions back into the hands of communities themselves and allowing them to be able to create the governance that they want for their community and that best suits their needs and their values.

So I think in general, I would say the Social Futures Lab is interested in this question of sort of rethinking these assumptions, re-imagining what these platforms could be. And then putting that power into the hands of people and of communities to be able to also define that for themselves.

*Ethan Zuckerman:*

One of the things that we're really interested in and over at my group at the Initiative for Digital Public Infrastructure is trying to pivot social media so that our communities are more often run by the people who use them rather than by that sort of distant authority. In some ways for me, the mailing list administrator at least was not quite as bad as what we have with something like Facebook, because at least you knew who she or he was, and you could appeal to that person.

What we have on so many platforms is something that's essentially just invisible and implacable. There's no way to actually talk to them. Tell me a little bit more about what people can do with PolicyKit, who are the users for it? How do they make choices about what sort of policies they want to have on their servers, and then how would they actually implement them?

*Amy Zhang:*

So, right now PolicyKit is sort of our first attempt at this kind of idea of building self-governance for communities. And so it's starting out as this kind of lower level programmatic layer, where it takes care of the work of connecting to different platforms that you have communication on.

So a Slack team, a Reddit, sub-Reddit, a Discord channel, for instance, and using our tool, which then hooks into these, you can go onto the tool and be able to write small programming scripts to be able to come up with the governance that you want. So for instance, you could set up rotating elections for moderators.

You could set up a randomized jury system to deal with content moderation issues. And we're starting out with this kind of programmatic layer because we first want to see kind of the range and flexibility of things that people could potentially come up with. But we do want to eventually target people who are not programmers and allow people who don't have that technical background to also create the governance that they want.

And so we're planning on building on top of that infrastructure, different tools to support communities and being able to do that. And our first goal there is to first create kind of a library of different common governance structures that people can then just mix and match and share with each other and bring into their community and tweak it to their needs. So, those are the goals of the system.

*Ethan Zuckerman:*

There's two things that I just love about the way that you're going about that. The first is that you're doing it with real communities that are actually out there in the world, they're live, people are using them right now, and platforms have different levels of governance control.

Reddit, as you referenced, actually gives you a good deal of control at the moderator level. And if the moderator decided that she wanted to hand over the reins to the community, there's really good ways to do that. So the first thing I love about it is, is that it's real.

The second thing I love about it is that rather than assuming that every community wants to have a giant long drag-out discussion about how they should govern themselves, we might actually start with some models and paradigms that work for a lot of communities and let people sort of tune them and choose them from there. Do you have a sense for what people want to do with a tool like PolicyKit? Do you have sort of users who are telling you we want to use it for these specific purposes?

*Amy Zhang:*

Yeah. So, I think we are kind of starting that initial process of doing field studies and interviews with communities, but there has been a lot of research already on online communities and sort of the struggles that they face with issues like moderator burnout, legitimacy crises that happened within the community, community splintering for various reasons, difficulty with understanding the norms of the community or dealing with newcomers.

So I think all of these are common issues that any community can run into. And I think another thing here is that communities have all kind of learned this on their own, right? When you signed up to be a moderator of a Facebook group and it blows up and becomes a hundred thousand members, you don't have a PhD in governance to be able to know how to manage this community.

And so you're learning by trial and error. And I think part of the power of having a place where people can kind of try these things out and learn from each other is that you don't have to do this all necessarily on your own.

*Ethan Zuckerman:*

I find myself wondering whether we're going to end up with almost a curriculum for teaching people moderator skills and sort of maybe not providing the PhD in content moderation or internet community, but at least the master's level degree. I know that I teach Jillian Dibbell's article A Rape in Cyberspace to try to get people to wrestle with this question of it's just words versus well, words are what the reality is made out of therefore, words are real.

How are you teaching your students when you're now leading people through this process of thinking about designing this, what are things that people should read before trying to build tools for communities or before trying to lead communities?

*Amy Zhang:*

So it's funny that you ask that question because I just gave a guest lecture on the topic of content moderation to an undergraduate kind of a lower level class. So these are freshmen and sophomores learning about data structures. And one of their assignments is to build a toxicity classifier and I take them through basically the assumptions that they're making when building such a tool and then zooming out to sort of the implications of those assumptions on the community, on society, on individual users of these tools.

*Amy Zhang:*

And then kind of trying to question those. So like, what does it mean if you deploy a toxicity model across the platform of millions of people, all with different ideas about what is toxicity and different cultural norms? What does it mean when you've now set up a system where there are contract laborers who need to be looking at and labeling this data to feed your classifier and in perpetuity, right?

So, I think there are just so many interesting and also difficult questions about how to design such rules. And I think that's sort of the first thing, which is just to insert those questions into students' minds. And then after that, there's just so much literature out there.

*Ethan Zuckerman:*

So, Amy, my favorite project of yours and there's a lot of projects, so it's hard to sort of pick a favorite, but I think the one that I ended up talking about the most when I talk about your work is *SquadBox*, can you talk a little bit about that project? And I hope then to tell our listeners why I love it so much and why I think it's so important.

*Amy Zhang:*

Yeah, absolutely. So *SquadBox* is a project that we started, that was aimed at people who are dealing with online harassment. And the way we started the project was that we went out and we interviewed lots of people who do deal with online harassment in a lot of different ways. For their work as a teacher, as a scientist, an activist.

Also, people dealing with ex partners who are harassing them. So a wide range of folks, and we've found a couple of things. We found that first people have very different ideas about what is harassment to them and how they would like to deal with harassment. And the second thing that we found, which was really interesting was that the most common technique that people used to respond to harassment was to actually give their password over to their friend or forward along something that was potentially harassing to a trusted individual.

And then that person would then come in and help the person who was getting harassed, be able to manage that harassment, such as, deleting things, reporting things, responding to the harasser, all these different things. And, we saw that in action and we thought, people are doing this in a kind of hacky way. They're going around how the system is designed, giving out their passwords to their friends, for instance, to be able to do this, what would it mean to actually design a system that can support this behavior and support the ability for people to be able to help each other when they're in distress.

And so that was where the idea of *SquadBox* was born. And it's a very simple idea that when you are dealing with harassment, that you have the ability to turn to your trusted friends, to who can then come in and according to your sort of needs and specifications, be able to help you deal with that harassment in the ways that I mentioned.

*Ethan Zuckerman:*

What are some of the lessons learned that have come from sort of using this in the real world? Are people using this as an active system?

*Amy Zhang:*

Yeah, it's an active tool. It's out there at *SquadBox*.org, I think is the email or the URL. And then you can also have an @*SquadBox*.org email as well. So, I think this work is really interesting to me because I think it is a demonstration of a lot of other things that platforms could potentially do to put more power into the hands of users of the platform to be able to customize their experiences on the platform.

And I think this is incredibly important. I think this model of sort of one software design to fit everybody, one community guideline that can just handle millions, sometimes billions of people, one algorithm to be able to define what is harassment to everyone is just not possible, I guess.

And I think that there is a lot that needs to be done with regards to localization, customization, personalization of people's experiences, to match up with their reality of how they see things. And I think that harassment was one case of that. And we're now exploring kind of additional tools to kind of support people in that behavior.

I think it's important to realize that when you put more things onto the user, it's not sort of transferring responsibility or transferring labor. I don't want to think of it that way. I think it needs to be an act of empowerment to these users. And so to do that, there are ways to design tools to actually support them in that and to allow them to support each other in that.

I think it's also not necessarily a solitary activity. So, one of our latest projects, which we're still kind of ongoing in our lab is thinking about, could end users, just everyday people on these platforms actually be able to build their own machine learning classifiers and be able to have these powerful, automated tools that are out there that platforms use to kind of apply to everyone and instead shift it so that people can use them to be able to do the things they need to do on these platforms.

*Ethan Zuckerman:*

So you're really asking this question of how could we give the users more agency, particularly when they're working on the platforms. As you know, this is a problem that I'm really obsessed with as well. The work that we did around Gobo was all about trying to figure out how to put more of that into the user's hands.

Unlike me, you've published papers about this and win awards and get top papers at a bunch of the best conferences around this. How are platforms reacting? Do you find that people within Facebook or YouTube are calling you up to sort of talk about these strategies? Do you think it's having an influence on them? What's the relationship with being a top UX academic at an industry where these questions, I would think really have to be hot topics for everybody sort of involved with the field?

*Amy Zhang:*

I think that it depends on the topic and the sensitivity of the topic at times. So I think that oftentimes major platforms are afraid of relinquishing power to users and sort of allow these sub platform level collective activities to happen sometimes. In some cases, it can be an interesting experiment and perhaps something that even eventually makes it to the platform tool, like tools for moderators for instances is a place where you've seen changes and improvements in the software tooling.

But other aspects, I think platforms are afraid and maybe they're doing experiments, but they're not sort of pushing these things out to the wider audience yet. So one example here is we have a project that we're looking at in terms of crowdsourcing misinformation review. So, how easy is it for people to be able to determine whether something is misinformation or not? And could this actually be something that people on a platform could be doing for each other? And also, that experts for instance, could have a place on the platform to be able to be providing these services and that people could then subscribe to them.

*Ethan Zuckerman:*

Amy, talk to me about your theory of change, right? So, you're someone who cares really passionately about the future of the internet. You're someone who has really concrete ideas about how we make this better. And you're involved with this amazing array of experiments in sort of trying to make different pieces of the internet better.

What's the theory of change? Is it inventing the next platform that rules them all? Is it subtly influencing Facebook to be less awful? Is it creating another generation of students that somehow go out and fix this thing much as I hope that you will go out and fix this thing. What's your theory behind your work on this?

*Amy Zhang:*

So, I think all of the things that you said are important. I think the main thing that I'm interested in is sort of injecting more ideas into the conversation and breaking out of the mold that we have of just a few platforms with a few ideas and designs for how things work and in the future, hopefully seeing a rich tapestry of different ways that people can have communications and can form communities together in the way that they want. And I think that means not just fixing the main platforms that we have to be more along the lines that I was saying, but also just having more out there.

*Ethan Zuckerman:*

I want to ask you one last thing. You've pretty recently gone down the path of becoming one of the leading figures in the space, going from being a student to now being a professor to someone whose lead authoring papers that are really shaping a lot of these dialogues. Some of the people who are watching this podcast are sort of asking the question, how do they get involved with making the internet better? How do they get involved with civic tech? How do they get involved with all of this?

What's your advice for people who are sort of looking at this, thinking about the master's degree, trying to figure out what to do in undergrad, thinking about career change or path change?

*Amy Zhang:*

I get questions like this all the time. I get inquiries from students. I think, especially in a computer science department, we are thinking about how to change the curriculums so that we're introducing some of these more societal questions and ethical questions at the undergraduate level, for students who are hungering to have some sort of positive societal impact, as opposed to just sort of building the next technology.

And students are really interested in making an impact that way. And this is a really great space to work on. After I gave my talk on content moderation last week, I ended with a slide of like, it's a really exciting time to be in content moderation. There's so many things happening even just in the last week in terms of real world events. So I think that for students who want to get involved, there's many avenues to do so. It could involve getting a master's degree or a PhD conducting research in these spaces.

It can also just mean working as a practitioner or working in your spare time, participating in sort of open source projects that are trying to build these alternative visions of social platforms. I think also nowadays, because of this swelling interest in these topics, there are kind of places where people who are very interested in these topics kind of convene online.

And I'm involved in a couple. One is the credibility coalition, which is this kind of just online gathering of people who are really motivated by the problem of misinformation and improving information credibility and information quality online. And we have students, we have academics, we have practitioners, we have people from platforms. So kind of anyone who wants to get involved can get involved.

There's another community that I'm a part of called medi gov, of medic governance, I guess, is the full name. And we're really interested in thinking of new forms of governance and being able to experiment with different kinds of governance. And there I also get folks from all over. So I think anyone can really get involved if they would like to contribute.

*Ethan Zuckerman:*

And in addition to those terrific online communities, one could always show up at the university of Washington and seek a PhD in this, right?

*Amy Zhang:*

Absolutely. I am recruiting students. So I can definitely put a plug in for my lab. You can go to our website at social.cs.washington.edu, we're the Social Futures Lab, where we're motivated by the idea of re-imagining our social and collaborative software to empower end users, to think about positive impacts on society and combating all of these issues of misinformation, online harassment and actually hopefully having a positive vision for social computing systems in the future.

*Ethan Zuckerman:*

Amy Zhang, thank you so much for all the work you do. Thanks for being with us on Reimagining The Internet and good luck in recruiting that next generation of folks to take up arms and work to make the internet better.

*Amy Zhang:*

Thank you so much for having me on Ethan.