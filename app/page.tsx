import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
        <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name = "Neura The Brainy Explorer"
                topic ="Neural Network of the Brain"
                subject = "Science"
                duration = {45}
                color = "#ffda6e"
            />

            <CompanionCard
                id="456"
                name = "Countsy the Number Wizard"
                topic ="Derivatives and Intergrals"
                subject = "Maths"
                duration = {60}
                color = "#e5D0ff"
            />

            <CompanionCard
                id="789"
                name = "Verba the Vocabulary Builder"
                topic ="language"
                subject = "English Literature"
                duration = {30}
                color = "#BDE7FF "
            />

        </section>

        <section className="home-section">
            <CompanionList
            title="recently completed sessions"
            companions= {recentSessions}
            classNames = "2/3 max-lg:w-full"

            />
            <CTA />
        </section>
    </main>
  )
}

export default Page
