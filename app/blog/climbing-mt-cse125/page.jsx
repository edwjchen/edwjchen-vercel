import React from "react";

export const metadata = {
    title: "Climbing Mt. CSE 125",
    description:
        "Helpful tips and takeaways from a former student and TA for CSE 125.",
};

export default function ClimbingMtCSE125() {
    return (
        <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
            <article className="w-full max-w-3xl blog-prose">
                <header className="mb-8">
                    <p className="text-sm text-primary-400">Last edited: 01/04/2020</p>
                    <h1>Climbing Mt. CSE 125</h1>
                    <p className="text-primary-200">
                        Helpful tips and takeaways from a former student and TA.
                    </p>
                    <p>
                        &quot;The goal of CSE 125 is to experience the design and
                        implementation of a large, complex software system in large
                        groups. To make the class exciting as well as challenging,
                        the project is a distributed, real-time, 3D, multiplayer
                        game of each group&apos;s design.&quot;{" "}
                        <a
                            href="https://cse125.ucsd.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://cse125.ucsd.edu/
                        </a>
                    </p>
                </header>

                <figure>
                    <img
                        src="/images/blog/cse125/cse125.png"
                        alt="CSE 125 2020 demo flyer"
                    />
                    <figcaption className="text-center">CSE 125 2020 Demo Flyer</figcaption>
                </figure>

                <section>
                    <h2>Introduction</h2>
                    <p>
                        Reflecting on CSE 125, both as a student and as a TA, I have
                        to admit that this has been by far my favorite course I have
                        taken at UCSD. I enjoyed all of it: from blue skying new
                        game designs and features with my fellow teammates to
                        staying up late in the labs ordering McDonald&apos;s food
                        delivery to remotely testing out games on the demo machines
                        this past Spring.
                    </p>
                    <p>
                        I felt like CSE 125 is a lot like climbing a mountain. The
                        road might be tough. The summit might be misty. And you
                        might stumble. But with incremental steps and a supportive
                        team, you will slowly reach the top. And don&apos;t worry,
                        there are also plenty of teams who have summited their own
                        mountains! Before starting your own trek, I would highly
                        recommend taking some time to learn about their journeys and
                        how they navigated their mountains.
                    </p>
                    <p>
                        With the onset of the COVID-19 pandemic, I found that many
                        of my normal day activities were taken for granted. From
                        waving hi to my friends in the CSE dungeons to setting up
                        in-person team meetings by the benches in front of Burger
                        King — much of our face-to-face interactions have been
                        replaced with Zoom meetings with our webcams off.
                    </p>
                    <p>
                        As a past student and TA for the course during the start of
                        the pandemic, I&apos;ve laid out four helpful takeaways and
                        tips that I believe will help teams climb the CSE 125
                        mountain, Mt. CSE 125, especially in a remote environment.
                    </p>

                    <figure>
                        <img
                            src="/images/blog/cse125/mountain.jpg"
                            alt="Mountain landscape representing the journey of CSE 125"
                            className="max-w-xs mx-auto"
                        />
                        <figcaption>Pexels: Mountain</figcaption>
                    </figure>
                </section>

                <hr />

                <section>
                    <h2>1. Get to Know Your Team</h2>
                    <p>
                        This might seem like an absolute no-brainer, but it is a
                        simple starting step that can get lost in a remote setting.
                    </p>
                    <p>
                        According to a{" "}
                        <a
                            href="https://rework.withgoogle.com/print/guides/5721312655835136/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google research study
                        </a>{" "}
                        conducted on 180+ active teams, the top two factors that
                        contribute to a team&apos;s success are psychological safety
                        and dependability. This means each member on the team should
                        feel comfortable sharing new ideas with the team and asking
                        each other for help. Team members should also be able to
                        trust in each other to complete their deliverables. If
                        you&apos;re curious about other factors that make teams
                        successful, be sure to check out the study!
                    </p>
                    <p>
                        From my experiences, I found that meeting up with my team,
                        especially outside of course/development hours, helped bring
                        everyone on the team closer together. Often times, my team
                        would get lunch in Price Center, study in the CSE dungeons,
                        play online games, and attend school events together. We had
                        even planned a group DMV trip to register for our Real IDs;
                        a trip that unfortunately ended up taking over six hours
                        because I managed to lock myself out of my own car (and
                        according to my team, I&apos;ll never live this down). Our
                        team had a lot of face-to-face interactions that bonded each
                        of the team members closer together.
                    </p>

                    <figure>
                        <img
                            src="/images/blog/cse125/team.jpg"
                            alt="Team illustration"
                            className="max-w-xs mx-auto"
                        />
                        <figcaption>Illustration by James Graham</figcaption>
                    </figure>
                    <p>
                        Since I was able to get closer to my team, bouncing new
                        ideas, proposing last minute changes, and even simply asking
                        for help was easy to do. Everyone on the team felt connected
                        with one another and on the same page.
                    </p>
                    <p className="text-center font-semibold">
                        Meet regularly…
                    </p>
                    <p>
                        In a remote setting, it might be a bit more difficult to get
                        this same level of cohesion within the team. I would
                        recommend setting up a recurring team lunch just to hang out
                        and chit-chat, play some online games together, and consider
                        even setting up a{" "}
                        <a
                            href="https://discord.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discord
                        </a>{" "}
                        server for the team. These events and meet-ups will serve as
                        a great introduction to see what types of games your
                        teammates would like to build, find out their favorite
                        quarantine activities, and get to know each other better.
                    </p>

                    <figure>
                        <img
                            src="/images/blog/cse125/amongus.gif"
                            alt="Among Us illustration"
                            className="max-w-xs mx-auto"
                        />
                        <figcaption>Yoshmo1991: Among Us Illustration</figcaption>
                    </figure>
                </section>

                <hr />

                <section>
                    <h2>2. Project Management</h2>
                    <p>
                        One unique aspect of CSE 125 compared to other CSE courses
                        is that the class structure is dependent on the team. There
                        aren&apos;t any lectures that you need to attend—with the
                        caveat of some amazing guest lectures—or bi-weekly homework
                        that you need to submit.
                    </p>
                    <p>
                        Therefore all of the team&apos;s deadlines, design
                        decisions, and productivity hours are established solely by
                        the team. To ensure your team understands what needs to be
                        done each week, I recommend that your team invests in a
                        project management tool and have a regular project planning
                        session.
                    </p>
                    <p>For each project planning session, answer three questions:</p>
                    <ul>
                        <li>What have you done this week?</li>
                        <li>What are you planning on accomplishing by next week?</li>
                        <li>Are there any blockers?</li>
                    </ul>
                    <p className="text-center font-semibold">
                        Focus on working code…
                    </p>
                    <p>
                        Given the time constraint of 10 weeks to build a fully
                        functioning 3D multiplayer video game, it is important to
                        focus on rolling out a <strong>working product</strong>{" "}
                        rather than having the cleanest system design.
                    </p>
                    <p>
                        Having productive project planning sessions will help keep
                        the team&apos;s focus on the end goal while simultaneously
                        ensuring there isn&apos;t redundant work being completed by
                        separate people. Planning out your current and future tasks
                        is just as important as navigating which mountain trails to
                        climb.
                    </p>
                    <p>Here are a few Kanban boards to help you get started:</p>
                    <ul>
                        <li>
                            <a
                                href="https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-project-boards"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Project Boards
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://trello.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Trello
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://asana.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Asana
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.notion.so/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Notion
                            </a>
                        </li>
                    </ul>
                    <p className="text-center font-semibold">Personal experiences…</p>
                    <p>
                        When I took CSE 125 back in 2019, my team agreed upon using a
                        Trello board. The board was structured with a list of future
                        todos (<strong>To Do Next Weeks</strong>), a current list of
                        open tasks to complete by this week (
                        <strong>To Do This Week</strong>), a list of backlog tasks to
                        come to if members of the team had extra time (
                        <strong>Backlog</strong>), the set of tasks teammates were
                        currently working on (<strong>Doing</strong>), and finally a
                        list of completed items (<strong>Done</strong>).
                    </p>
                    <p>
                        At the beginning of the quarter, my team and I had a
                        brainstorming session to think of all the possible tasks that
                        need to be completed for this project. Each of the tasks we
                        came up with were added as a new card into the{" "}
                        <strong>To Do Next Weeks</strong> section. These tasks
                        included high level features such as having a working server
                        and client, creating a character model in Maya, loading a
                        model into a world, and incorporating player collisions. At
                        the end of our brainstorm session, we{" "}
                        <strong>sorted</strong> each task by priority and assigned
                        the highest priority tasks to be completed first.
                    </p>
                    <p>
                        Each week, our team would have a project planning session to
                        understand which tasks have been completed and which tasks
                        have not. Tasks that have been completed will be moved into
                        the <strong>Done</strong> list while those that have not
                        will be moved into the <strong>Backlog</strong> list. Newly
                        assigned tasks will be moved from the{" "}
                        <strong>To Do Next Weeks</strong> list to the{" "}
                        <strong>To Do This Week</strong> list, and as teammates
                        start their tasks, they will move the task from{" "}
                        <strong>To Do This Week</strong> to <strong>Doing</strong>.
                    </p>

                    <div className="flex gap-4">
                        <figure className="flex-1 flex flex-col items-center">
                            <img
                            src="/images/blog/cse125/pm.jpg"
                            alt="Planning and scheduling illustration"
                            className="w-full object-cover"
                            />
                            <figcaption>Pexels: Planning</figcaption>
                        </figure>

                        <figure className="flex-1 flex flex-col items-center">
                            <img
                            src="/images/blog/cse125/trello.png"
                            alt="Salt Shaker Games Trello board"
                            className="w-full object-cover"
                            />
                            <figcaption>Salt Shaker Games Trello Board</figcaption>
                        </figure>
                    </div>
                </section>

                <hr />

                <section>
                    <h2>3. Group Coding</h2>
                    <p>
                        Yes, I am talking about pair programming... but not exactly
                        in the same sense as the traditional definition. With the
                        lack of face-to-face interactions, it is often hard to
                        discuss game ideas and let the creativity flow between team
                        members. It is also hard to get help and resolve blockers
                        when there&apos;s a waiting time involved.
                    </p>
                    <p>
                        In 2020, many of the teams would typically hop on a Zoom or
                        Discord call and code together. They may not be exactly
                        working on the same piece of code, but it is always nice to
                        work in a more lively environment and have some friends to
                        bounce ideas off of.
                    </p>
                    <p>
                        One super helpful tool to use is{" "}
                        <a
                            href="https://code.visualstudio.com/blogs/2017/11/15/live-share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visual Studio Code Live Share
                        </a>
                        , which basically changes the VS Code editor into a Google
                        Doc. One user can open up a VS Code Live Share session and
                        share their session link with their teammates. After
                        joining, each member can work within the same code editor at
                        the same time. I found this feature to be very useful for
                        remote development and debugging sessions.
                    </p>

                    <figure>
                        <img
                            src="/images/blog/cse125/vscode.gif"
                            alt="VS Code Live Share in action"
                        />
                        <figcaption>VS Code Live Share</figcaption>
                    </figure>
                </section>

                <hr />

                <section>
                    <h2>4. Game Design</h2>
                    <p>
                        One of my favorite aspects of CSE 125 is that each team has
                        the freedom to climb any mountain they want. In other words,
                        teams can design any game they would like—under the
                        constraints that they are able to build the game within 10
                        weeks. In the past years, teams have built their own
                        versions of first person shooters, tower defense games,
                        battle arena games, boss battle games, games with imbalanced
                        teams, games with a building stage and then a fighting
                        stage… the list goes on and on.{" "}
                        <strong>
                            There are a few running motifs that appear when
                            designing games.
                        </strong>
                    </p>
                    <p className="text-center font-semibold">
                        Reference existing games…
                    </p>
                    <p>
                        Many teams like to reference mechanics from existing games
                        as a starting point for designing their own games. Looking
                        at the games from 2020,{" "}
                        <a
                            href="https://cse125.ucsd.edu/2020/cse125g3/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cyber City
                        </a>{" "}
                        was a cyberpunk, tower defense, battle arena game that had a
                        similar minion and turret system based off of League of
                        Legends.{" "}
                        <a
                            href="https://cse125.ucsd.edu/2020/cse125g5/wordpress/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Grow Away
                        </a>
                        , a plant-based, tower defense game, took concepts from
                        Plants vs. Zombies, OverCooked, and Bloons Tower Defense.
                    </p>
                    <p className="text-center font-semibold">
                        Focus on a mechanic…
                    </p>
                    <p>
                        Another popular path is to come up with a new or existing
                        mechanic and use this mechanic as a focal point for the
                        game.{" "}
                        <a
                            href="https://cse125.ucsd.edu/2020/cse125g1/blog/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gaia
                        </a>{" "}
                        was a game that had fairly simple graphics but a unique
                        terrain manipulation feature. Each team consisted of two
                        players, one player controlling a sphere that can roll
                        around and collect coins, and another player that could
                        raise and lower mountains to help their sphere traverse the
                        terrain easier or block the other team&apos;s sphere.
                    </p>
                    <p>
                        Another example is{" "}
                        <a
                            href="https://www.youtube.com/watch?v=9uMG5lFRf5Y"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Stikbold!
                        </a>
                        , a groovy 70s-themed fantasy dodgeball game. This game
                        elevates this simple well-known game by adding new
                        interactive elements into the surrounding environment and
                        inducing random chaotic events.
                    </p>
                    <p className="text-center font-semibold">
                        Create something new…
                    </p>
                    <p>
                        There are as many mountains that have yet to be explored as
                        there are different, wonky games that have yet to be built.
                        Here are two examples of games that have amazed me with
                        their simple controls but extensive game features.{" "}
                        <a
                            href="https://www.youtube.com/watch?v=kqZgVWbw_aE"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Push Me Pull You
                        </a>
                        , an award-winning local multiplayer game about friendship
                        and wrestling. Players are joined at the waist and share a
                        long, wriggling body. The overall win condition of the game
                        is very simple: whoever controls the ball the longest wins!
                    </p>
                    <p>
                        Another game with players with a conjoined body is{" "}
                        <a
                            href="https://www.youtube.com/watch?v=8s26rpR3nWg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PHOGS!
                        </a>
                        , except this game is all about solving puzzles and
                        strategical thinking.
                    </p>
                    <p className="text-center font-semibold">
                        Questions to think about when designing your game…
                    </p>
                    <ul>
                        <li>
                            What style game would you like to build? (Strategy,
                            Survival, Battle Royale, Exploration, a mix?)
                        </li>
                        <li>
                            What perspective do you imagine your game to be in?
                            (1st-person, 3rd-person, etc.)
                        </li>
                        <li>
                            How do you imagine the game&apos;s win condition to be?
                            (time, points, lives, etc.)
                        </li>
                        <li>
                            How do you imagine the game to look? How will it be
                            played?
                        </li>
                    </ul>
                    <p className="text-center font-semibold">Keep it simple…</p>
                    <p>
                        Although there are very little restrictions on what type of
                        game your team can build, there always seems to exist some
                        unforeseen force that tries to mess things up. Some unknown
                        bug in the animation code. Some deadlock in the server
                        causing the game to crash. Overestimating the time it takes
                        to finish a task. For this course, I would recommend
                        striving for having a{" "}
                        <strong>simple working product</strong> first and leaving
                        open ends to incorporate additional game features.
                    </p>

                    <div className="flex gap-4">
                        <figure className="flex-1 flex flex-col items-center">
                            <img
                            src="/images/blog/cse125/pmpy.gif"
                            alt="Push Me Pull You gameplay"
                            className="w-full object-cover"
                            />
                            <figcaption>Push Me Pull You Gameplay</figcaption>
                        </figure>

                        <figure className="flex-1 flex flex-col items-center">
                            <img
                            src="/images/blog/cse125/phogs.gif"
                            alt="PHOGS! gameplay"
                            className="w-full object-cover"
                            />
                            <figcaption>PHOGS! Gameplay</figcaption>
                        </figure>
                    </div>
                </section>

                <hr />

                <section>
                    <h2>Conclusion</h2>
                    <p>
                        If you&apos;ve made it this far, I hope you found these
                        takeaways insightful! Looking back, CSE 125 seemed like a
                        monumental mountain to climb, but each step along the way
                        was very rewarding. The journey will be well worth the
                        effort.
                    </p>
                    <p className="text-center font-semibold">
                        I&apos;m excited to see which mountains you will decide to
                        climb :)
                    </p>

                    <figure>
                        <img
                            src="/images/blog/cse125/summit.jpg"
                            alt="Group of people at a mountain summit"
                        />
                        <figcaption>Pexels: Summit</figcaption>
                    </figure>

                    <h3>Acknowledgements</h3>
                    <p>
                        Special thanks to Kate, Leon, Sterling, and Charles for
                        their productive feedback and revisions.
                    </p>
                </section>
            </article>
        </main>
    );
}

