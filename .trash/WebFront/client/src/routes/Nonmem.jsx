
import {Link} from "react-router-dom"
import styles from "./Nonmem.module.css"

function Nonmem() {
  return <div className={styles.non}>
  <p><Link to="/"><button className={styles.btn}>뒤로가기</button></Link>
비회원 페이지</p>

<div>
  
<p className={styles.one}>데뷔탕트 하우징은 중세시대를 배경으로 한 인테리어 SNS 플랫폼입니다.
</p>

NFT 시스템을 도입하여 사용자는 다양한 가구와 벽지 등을 활용해 자신만의 방을 꾸며
새로운 사람들의 방에 방문하거나, 지인들과 서로의 방을 구경하며 즐거움을 느낄 수 있습니다.
<p className={styles.one}>
또한, NFT를 통해 물품을 거래하고 자신이 만든 오브젝트를 판매하는 등
창의적인 결제활동이 가능한 게임입니다.
</p>

<p className={styles.two}> 
현재 NFT 및 메타버스는 정의가 아직 확립되지 않은 신생 개념입니다.
<p className={styles.two}> 
많은 사람들이 이 개념을 어렴풋이 알고는 있지만, 자신과는 큰 관련이 없다고 생각합니다.
<p className={styles.two}> 
하지만 데뷔탕트 하우징을 통해 NFT와 메타버스를 접하며, 추상적이던 의미를 구체적으로 이해하고,
더욱 즐거운 경험을 하도록 하는 것이 우리의 목표입니다.
</p>
</p>
</p>
</div>

<div>
<p className={styles.three}>
기존의 SNS와는 달리 데뷔탕트 하우징은 사용자가 가상공간에서 
자신의 감각과 아이덴티티를 인테리어로 표현할 수 있는 플랫폼입니다. 
</p>
<p className={styles.three}>
방을 가구와 오브젝트 등으로 꾸미는 것은 캐릭터를 옷이나 액세서리로
꾸미는 것보다 더 다양하고 유연한 표현 방식입니다. 

</p >
<p>
또한, NFT의 특성상 사용자는 자신이 만든 오브젝트를 활용하고
판매할 수 있어 보다 독창적이고 섬세한 표현이 가능합니다.
</p>
</div>

<div>
<p className={styles.four}>
데뷔탕트 하우징은 NFT를 지원합니다.
이를 사용해 사용자가 직접 오브젝트를 제작하여 판매할 수 있습니다.
</p>
<p className={styles.four}>
이후 다른 사용자들은 메타 마스크를 통해 토큰으로 구매할 수 있습니다. 또한 사용자들은 3D 모델링으로 오브젝트를 제작하여
메타버스 세계에서 더욱 몰입적인 경험을 할 수 있습니다.
</p>
</div>
<p className={styles.five}> 
데뷔탕트 하우징은 방 방문 기능과  SNS 기능을 제공하여
사용자들이 인테리어한 방을 방문하고
다른 사용자들과 의견을 공유할 수 있는 기능이 있습니다.
</p>
<p className={styles.five}> 
자신의 공간을 보여준 후 다른 사용자들의 의견을 확인할 수 있습니다.
</p>
  </div>;
}

export default Nonmem;