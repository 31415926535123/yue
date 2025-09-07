import Link from "next/link";

export const metadata = {
  title: "醉游长安遇诗仙",
  description: "天宝三载，春深时节，长安城牡丹正艳。一位白衣男子摇摇晃晃地从酒肆走出，腰间佩剑，手中执壶，口中吟唱着无人听懂的词句..."
};

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8">
      {/* 导航栏 */}
      <nav className="w-full max-w-4xl mx-auto mb-6">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            首页
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </nav>
      
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">醉游长安遇诗仙</h1>
          <blockquote className="text-gray-600 italic border-l-4 border-amber-400 pl-4">
            天宝三载，春深时节，长安城牡丹正艳。一位白衣男子摇摇晃晃地从酒肆走出，腰间佩剑，手中执壶，口中吟唱着无人听懂的词句...
          </blockquote>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">一、 酒肆初逢</h2>
          <p className="text-gray-700 mb-4">
            暮春的长安西市，人流如织。波斯胡商牵着骆驼缓缓走过，驼铃<code className="bg-amber-100 px-1 rounded">叮当</code>作响；卖花的少女挽着竹篮，叫卖着刚采摘的牡丹；远处曲江池畔，贵族子弟正在举行马球比赛，欢呼声随风隐约传来。
          </p>
          <p className="text-gray-700 mb-4">
            我——一个<strong>穷书生</strong>，正坐在「胡玉楼」二层的窗边，愁眉苦脸地盯着桌上几枚铜钱，计算着如何用它们撑过这个月。
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm">
{`coins = 5  # 仅剩的五文钱
wine_price = 10  # 一壶酒的价格

if coins >= wine_price:
    print("一醉解千愁！")
else:
    print("唉，只能喝半壶了...")`}
            </code>
          </pre>
          <p className="text-gray-700 mb-4">
            突然，楼梯口传来一阵骚动。只见一个<strong>四十多岁的中年男子</strong>步履蹒跚地走上来，一袭白袍已经有些发黄，腰间佩着一柄长剑，手中还拿着个酒葫芦。他面如满月，目若朗星，虽带醉态，却自有一股飘逸出尘的气质。
          </p>
          <blockquote className="bg-amber-50 border-l-4 border-amber-400 italic p-4 rounded-r">
            "掌柜的，再来三斗葡萄酒！记在...呃...记在翰林院账上！"他打了个酒嗝，引得满堂宾客哄笑起来。
          </blockquote>
          <p className="text-gray-700">
            我认出他了——<strong>李白</strong>！那个名动天下的诗人，天子赐金放还的谪仙人！此刻他竟然就坐在离我不到三张桌子的地方。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">二、 诗剑双绝</h2>
          <p className="text-gray-700 mb-4">
            李白似乎察觉到了我的目光，摇摇晃晃地走到我的桌前，毫不客气地坐下。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-amber-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">他的动作</th>
                  <th className="px-4 py-2 border border-gray-300">我的反应</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">将酒葫芦推到桌中央</td>
                  <td className="px-4 py-2 border border-gray-300">惊讶地睁大眼睛</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">眯着眼打量我</td>
                  <td className="px-4 py-2 border border-gray-300">紧张地咽了口水</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">突然大笑起来</td>
                  <td className="px-4 py-2 border border-gray-300">不知所措地僵住</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            "少年人，我观你眉宇间有郁结之气，可是功名不顺？"他不等我回答，便自顾自地倒了两碗酒，"来，与我对饮一杯，让万古愁都随这杯中物散去！"
          </p>
          <p className="text-gray-700 mb-4">
            我慌忙摆手："晚生...晚生不敢..."
          </p>
          <p className="text-gray-700 mb-4">
            "有何不敢！"他仰天大笑，"人生得意须尽欢，莫使金樽空对月！天生我材必有用，千金散尽还复来！"
          </p>
          <p className="text-gray-700 mb-4">
            就在这时，楼下突然传来一阵喧哗。我们探头望去，只见几个<strong>地痞无赖</strong>正在欺负一个卖胡琴的老者。我正犹豫间，李白已经站起身來。
          </p>
          <blockquote className="bg-red-50 border-l-4 border-red-400 italic p-4 rounded-r">
            "住手！"他一声断喝，如雷霆震怒，"光天化日之下，岂容尔等放肆！"
          </blockquote>
          <p className="text-gray-700">
            那几个无赖先是一愣，随后哄笑起来："一个醉鬼也敢多管闲事？弟兄们，给他点颜色看看！"
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">三、 月下剑舞</h2>
          <p className="text-gray-700 mb-4">
            眼看那些无赖冲上楼来，我吓得腿软，却见李白不慌不忙地拔出腰间长剑。剑光如秋水，映照着他微醺的面容。
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>第一个无赖举棍劈来，李白侧身闪过</li>
            <li>第二个从背后偷袭，他反手用剑鞘格挡</li>
            <li>第三个拔出匕首，直刺面门</li>
          </ul>
          <p className="text-gray-700 mb-4">
            但见李白身形飘忽，剑法如行云流水，竟在狭小的酒肆空间中穿梭自如。他的剑招不像厮杀，倒像在<strong>跳舞</strong>，配合着他口中吟诵的诗句，形成奇妙的韵律：
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 text-center">
            <code className="text-sm text-gray-800">
{`银鞍照白马，飒沓如流星。
十步杀一人，千里不留行。
事了拂衣去，深藏身与名。`}
            </code>
          </pre>
          <p className="text-gray-700 mb-4">
            不过转眼间，那几个无赖都已被打倒在地，呻吟着爬起身逃走了。李白收剑入鞘，面不改色，仿佛刚才只是随手挥退了几个蚊蝇。
          </p>
          <p className="text-gray-700">
            全场寂静片刻后，爆发出热烈的掌声。酒客们纷纷围上来要请他喝酒。李白却只是笑笑，走回我的桌前，将碗中酒一饮而尽。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">四、 金龟换酒</h2>
          <p className="text-gray-700 mb-4">
            "先...先生好剑法！"我由衷赞叹。
          </p>
          <p className="text-gray-700 mb-4">
            他摆摆手，笑道："不过是些防身的伎俩，比不得诗酒之道。少年人，你可知这长安城中，什么最珍贵？"
          </p>
          <p className="text-gray-700 mb-4">
            我想了想："是...功名利禄？"
          </p>
          <p className="text-gray-700 mb-4">
            "非也非也！"他又倒了一碗酒，"是<strong>知己</strong>！今日你我有缘，当浮一大白！"
          </p>
          <p className="text-gray-700 mb-4">
            说罢，他摸了摸口袋，突然面露尴尬："呃...今日出门急，未带银钱...掌柜的，记账可否？"
          </p>
          <p className="text-gray-700 mb-4">
            胡人掌柜面露难色："李翰林，您已经欠了十八贯钱了..."
          </p>
          <p className="text-gray-700 mb-4">
            我正在犹豫是否要用最后五文钱付账，李白却突然解下腰间一块玉佩，拍在桌上。
          </p>
          <blockquote className="bg-green-50 border-l-4 border-green-400 italic p-4 rounded-r">
            "拿我的金龟去！换最好的酒来！"
          </blockquote>
          <p className="text-gray-700 mb-4">
            我大惊失色："先生，这太贵重了！"
          </p>
          <p className="text-gray-700 mb-4">
            "哈哈哈！"他仰天大笑，"五花马，千金裘，呼儿将出换美酒，与尔同销万古愁！少年人，钱财乃身外之物，何必耿耿于怀！"
          </p>
          <p className="text-gray-700">
            那晚，我们喝得酩酊大醉。李白吟诗，我磨墨；李白舞剑，我击节。直到月上中天，他才摇摇晃晃地站起身。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">五、 别君去兮何时还</h2>
          <blockquote className="bg-blue-50 border-l-4 border-blue-400 italic p-4 rounded-r mb-4">
            "我辈岂是蓬蒿人，仰天大笑出门去！"他唱着新作的诗句，走向长安的夜色。
          </blockquote>
          <p className="text-gray-700 mb-4">
            我急忙追上去："先生要去何处？"
          </p>
          <p className="text-gray-700 mb-4">
            他转过身，月光洒在他身上，仿佛真就要羽化登仙一般："天地为庐，四海为家。或许去嵩山访元丹丘，或许去剡溪寻谢公迹。少年人，有缘自会再见！"
          </p>
          <p className="text-gray-700 mb-4">
            说完这些，他挥挥手，大步走入长安的夜色中，只留下歌声在空气中回荡：
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 text-center">
            <code className="text-sm text-gray-800">
{`世间行乐亦如此，古来万事东流水。
别君去兮何时还？且放白鹿青崖间...`}
            </code>
          </pre>
          <p className="text-gray-700 mb-4">
            我站在原地，久久不能回神。摸向口袋，却发现不知何时，他竟将那块金龟玉佩塞了回来，下面还压着一张纸条：
          </p>
          <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r text-center">
            <strong className="text-xl text-amber-800">"诗酒趁年华"</strong>
            <em className="text-gray-600 block mt-2">——与君共勉</em>
          </blockquote>
          <p className="text-gray-700 mb-4">
            这就是我遇见李白的故事。后来每当我失意惆怅时，总会想起那个夜晚，想起他的话：
          </p>
          <p className="text-center text-xl text-amber-700 font-semibold">
            <del className="text-gray-400">功名利禄如浮云</del> <strong>唯有诗酒悦人生</strong>！
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-8 pt-4 border-t border-gray-200">
          后记：据《唐才子传》载，李白确实有&quot;金龟换酒&quot;的轶事，不过是与贺知章之间发生的。本文为虚构创作，融合了多个李白传说典故。
        </footer>
      </article>
    </div>
  );
}