import React from 'react'
import styled from 'styled-components'
import { storyMobileWidth, backgroundColor } from '../Styles'
import text from '../Copy'

const Container = styled.div`
  min-height: 50vh;
  position: relative;
  padding-bottom: 10vh;

  .sticky-text {
    top: 10vh;
    border: 0px solid #547598;
    .mobile-text {
      @media (max-width: ${storyMobileWidth}px) {
        position: relative;
        padding: 41vh 0;
        p {
          background-color: ${backgroundColor};
        }
      }
    }
    .first-paragraph {
      @media (max-width: ${storyMobileWidth}px) {
        padding-top: 20vh;
      }
    }
  }
`

// const text = {
//  section_0: { words: "Bulgaria was hit particularly hard by the global financial crisis of 2008, and altough it quickly restored positive growth levels by 2010, in contrast to other Balkan countries, growth remained slow and fell back to flat levels by 2012." },
//  section_1: { words: "However, post 2012 Bulgaria has been able to gradually build up growth levels to pre financial crisis levels, reaching 4% in 2016, driven by strong domestic demand and faster disbursement of EU structural funds. 	Yet Bulgaria remains the poorest of the EU’s 28 member states and its growth rates will need to accelerate significantly for incomes to converge with those of its eastern European peers or neighbouring Greece." },
//  section_2: { words: "In contrast, Portugal's recovery from the financial crisis was much rockier, with a significant downturn in 2012, shrinking the economy faster than ocurrred during the global crisis itself. Portugal didn't return to consistent positive growth until 2012 and its growth has been slow in the following years, lagging behind that even of Bulgaria." },
//  section_3: { words: "Sweden was far from immune to the global downturn of 2008-09. But unlike other countries, it bounced back strongly. Its 6 percent growth rate in 2010 trounced the 2.8 percent expansion in the United States and was stronger than any other developed nation in Europe, until it too hit flat growth in 2012. Since then growth has been more muted, and has followed a similar trajectory to both Portugal and Bulgaria in year on year growth." },
//  section_4: { words: "Depopulation in Bulgaria since the turn of the century is perhaps the most marked in Europe with some regions losing almost 40% of their population. All but two regions experienced population decline, mostly in double digits, as the rural population declined significantly across the country." },
//  section_5: { words: "Only Sofia City and Varna increased in population during this period, with cumulative rises of 8 and 7 percent respectively, as the cities grew modestly at the expense of the rural regions." },
//  section_6: { words: "Perhaps more surprisingly, Portugal has also undergone population decline in almost every region since the turn of the century, with only the city of Lisbon, the Oeste region, and the Algarve increasing in population." },
//  section_7: { words: "In contrast Sweden has only undergone population decline in one region, Norrbotten, in the far north. The middle of the country has had a stable population during the 21st Century, and all the regions in the South have experience population increases. Stockholm has had the most marked increase, with population growth of 26% since 2000." },
//  section_8: { words: "kazan" },
//  section_9: { words: "lille" }
// }

const StorySectionContainer = ({ copy, section }) => {
  return (
    <Container>
      <div className="sticky-text sticky-container">
        <div className="mobile-text first-paragraph" ref={section}>
          <p>{text[copy].words}</p>
        </div>
      </div>
    </Container>
  )
}

export default StorySectionContainer