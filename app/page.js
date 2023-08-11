import Container from '../components/pages'
import Card from '@/components/Card'
import cardData from '@/constant/index'

export default function Home() {

  return (
    <main className="main">
      <Container>
        {cardData.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            customclass={card.customclass}
            Text={card.Text}
            paragraph={card.paragraph}
          />
        ))}
      </Container>
     {/*  <Container>
        <Card
          url="https://confidencial.digital/revista-niu/tendencias/una-guia-para-visitar-y-disfrutar-de-las-mejores-playas-de-nicaragua/"
          customclass="img-1-"
          Text="San Juan del Sur"
          paragraph="It is one of the favorite destinations for national
          and international tourists and a mandatory stop to visit in summer.
          San Juan del Sur is a natural treasure of sun and sand located 140 
          kilometers from Managua.
          It is one of the favorite destinations for national
          and international tourists and a mandatory stop to visit in summer.
          San Juan del Sur is a natural treasure of sun and sand located 140 
          kilometers from Managua.
          It is one of the favorite destinations for national
          and international tourists and a mandatory stop to visit in summer.
          San Juan del Sur is a natural treasure of sun and sand located 140 
          kilometers from Managua." />
        <Card
          url="https://www.visitcentroamerica.com/visitar/corn-island/"
          customclass="img-2-"
          Text="Corn Island"
          paragraph="Surrounded by turquoise water and white sand, South West
          Beach in Corn Island is a hidden treasure in the Autonomous Region of
          the South Caribbean Coast of Nicaragua." />
        <Card
          url="https://www.booking.com/searchresults.es.html?aid=383261&label=montelimar-akeH2OWYJYEHxe3VsJi84wS235835900524%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-345467298%3Alp1010302%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YWiN3YY6TdisqFnE_xanuq8&gclid=Cj0KCQjwuNemBhCBARIsADp74QSqXsX-lOheDa3EKLy5vp_CuTuKXhpB3YVsCrmarLH4EYalUv_Cl_kaAlvSEALw_wcB&dest_type=city&redirected=1&dest_id=-1113434&source=city&redirected_from_city=1&keep_landing=1&sid=da748051f9efa91fb2abb277ccd1ad67"
          customclass="img-3-"
          Text="Montelimar"
          paragraph="Considered an icon of the natural beauty of the Nicaraguan
          Pacific, Montelimar is one of the most exclusive beaches in the country, 
          surrounded by impressive and exuberant tropical vegetation." />
      </Container> */}
    </main>
  )
}
