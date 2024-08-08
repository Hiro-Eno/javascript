// glossaryファイル JavaScript
`use strict`
const glossary = [
{target:`算術演算子（operator）`, content:`記号や英数字によって構成された予約語で、データに対する演算内容を表す（+、-、*、/、%、**）。`},
{target:`文字列型`, content:`'Hello world!'など文字列のデータ型。`},
{target:`数値型`, content:`1、5、1.001など数値のデータ型。`},
{target:`ブーリアン型`, content:`true、falseのデータ型。`},
{target:`高水準言語`, content:`プログラミング言語のJavaScript、Python、C++など。`},
{target:`アセンブリ言語`, content:`ハードウェアに直接対話する中級言語で、機械語との対応があるプログラミング言語。`},
{target:`低水準言語`, content:`ハードウェアに近い表現を使用し、直接の制御が可能なプログラミング言語。`},
{target:`文字列結合`, content:`2つの文字列を結合すること（'butter' + 'fly'）。`},
{target:`コンソール`, content:`テキストベースのユーザーインターフェースで、プログラムの出力や入力を行う画面。`},
{target:`キーワード`, content:`プログラムの構造や動作を指定するための予約された言葉や識別子。`},
{target:`変数`, content:`データを格納するためのメモリ上の場所で、値が変更可能なプログラムの要素。`},
{target:`関数シグネチャ`, content:`関数の動作を説明するのに使用。<br>関数名、引数のデータ型と数、返り値のデータ型を持つ。`},
{target:`比較演算子（comparison operator）`, content:`プログラムで値を比較するために使用される演算子で、等しい、大なり、小なりなどの関係を表現する。`},
{target:`式（epression）`, content:`値を導き出すもの。`},
{target:`型（type）`, content:`データのカテゴリ（例：数値型やブーリアン型）。`},
{target:`論理式（logical expression）`, content:`論理演算子を使用して組み立てられた式で、真（true）または偽（False）の結果を返す。`},
{target:`HTML（Hyper Text Markup Language）`, content:`Webページの内容と構成を記述するための言語。`},
{target:`タグ`, content:`HTMLドキュメントでの各要素の特性をマーキングするもの。`},
{target:`ブロック`, content:`プログラム内の複数のステートメントやコード行をまとめ、1つのまとまりとして扱うためのコードの集まり。<br>通常、中括弧{}で囲まれ、その中に複数のコード行が含まれる。`},
{target:`インライン`, content:`コードや要素が本来の文脈から外れずに、その場で直接配置されること。<br>それぞれ行や要素の中に直接挿入される。`},
{target:`if文（条件分岐、conditionals）`, content:`プログラム内である条件が満たされた場合や特定の状況に応じて、異なるコードブロックや処理が実行されるプログラムの構造。<br>***(){<br>}else ***(){<br>}else{<br>}`},
{target:`オペランド（operand）`, content:`演算子で操作されるデータを表す命令の一部。<br>式や演算子において操作される値またはオブジェクト。二項演算子の場合、それに適用される数値や変数など。`},
{target:`条件（condition）`, content:`制御構造や決定構造において評価され、真偽値を返す式。<br>通常、条件文（if文やwhile文など）で使用される。`},
{target:`条件 (三項) 演算子`, content:`3 つのオペランドをとる演算子。<br>条件に続いて疑問符 (?)、そして条件が真値であった場合に実行する式（返り値）、コロン (:) が続き、条件が偽値であった場合に実行する式（返り値）が最後に来る。<br>condition ? exprIfTrue : exprIfFalse;<br>sell < 100 ? {tip = '$2.00'} : {tip='$10.00'};<br><br>condition ? rvTrue : rvFalse;<br>sell < 100 ? '$2.00' : '$10.00';`},
{target:`テスト駆動型開発（Test Driven Development, TDD）`, content:`ソフトウェアの開発プロセス。<br>実際のプロダクションコード（production code）を書く前に、機能の要件と期待値を書く。テストではエッジケースも考慮。<br>①テストを書く。<br>②テストを実行。<br>③必要最小限のコードを書く。<br>④テストを再実行。<br>⑤ ①～④を繰り返し。<br>⑥リファクタリング。`},
{target:`コーディング規約 スタイルガイドライン`, content:`コードの品質を高めるための基準。<br>参考サイト：beautifier.io、AirBnbスタイルガイド`},
{target:`比較（comparisons）`, content:`プログラムで異なる値や変数の大小や等しさなどを調べ、その結果に基づいて制御フローを変更する演算。`},
{target:`関数呼び出し演算子`, content:`()`},
{target:`等しい`, content:`==`},
{target:`等しくない`, content:`!=`},
{target:`厳密に等しい`, content:`===`},
{target:`厳密に等しくない`, content:`!==`},
{target:`よりも大きい`, content:`>`},
{target:`以上`, content:`>=`},
{target:`未満`, content:`<`},
{target:`以下`, content:`<=`},
{target:`AND 論理積 かつ`, content:`&&`},
{target:`OR 論理和 または`, content:`||`},
{target:`NOT`, content:`!`},
{target:`配列（array）`, content:`項目のまわりには各括弧[]をつける。<br>各項目はコンマ','で分ける。複数の要素を保存。複数の値のリスト。インデックスは0から。`},
{target:`要素（element）`, content:`プログラムやデータ構造において、配列やリストなどの中に格納されている各単位やデータの単位。<br>通常、要素はインデックスやキーによって識別。`},
{target:`インデックス`, content:`配列やリストなどのデータ構造において、各要素に割り当てられた一意の番号や位置を指す値。<br>通常、0から始まる整数値で表され、指定された位置の要素にアクセスするために使用。`},
{target:`ミュータブル`, content:`変化させることができるデータ。`},
{target:`イミュータブル`, content:`変化できないデータ。`},
{target:`オブジェクト`, content:`どのような種類の値でも格納できる。<br>中括弧{}で周りを囲む。キーと値のペアをプロパティと呼び、値を参照するときは文字列のキーを使う。キーと値はコロン':'で区切る。それぞれのキーと値のペアの間はコンマ','で区切る。宣言済みの関数や変数を格納する時は':'を省く簡略化が可能。<br>const obj = {funcA:funcA(), funcB:funcB(), x:x, y:y}<br>const obj = {funcA, funcB, x, y} → 簡略型`},
{target:`プロパティ`, content:`オブジェクトのキーと値のペアのこと。`},
{target:`key valueペア`, content:`キーと値のペア。`},
{target:`ドット記法`, content:`オブジェクトの値のアクセスの仕方。<br>ドット'.'の後にキーを書く。`},
{target:`ブラケット記法`, content:`配列やオブジェクトの値のアクセスの仕方。<br>角括弧[]の中に配列はインデックス、オブジェクトはキーを書く。`},
{target:`スコープ`, content:`ひとつの区切られた範囲であり、この中で宣言された変数は、この範囲でしかアクセスできない。<br>外から内の変数にアクセスはできない。`},
{target:`関数スコープ`, content:`関数が呼び出されると作成される。<br>関数内で宣言された変数はこの範囲でのみアクセスでき、関数の処理が終わると消去される。仮引数もこの範囲でしか使えない。`},
{target:`ブロックスコープ`, content:`波括弧{}で囲んで作る。<br>この範囲で宣言された変数は、その中でのみ使用可能、処理が終わると消去される。if文やforループなど。`},
{target:`ローカルスコープ`, content:`関数スコープやブロックスコープのこと。`},
{target:`グローバルスコープ`, content:`最上位の範囲。ローカルスコープの外側。<br>ローカルスコープで宣言された変数はアクセスできない。この範囲で宣言された変数は、コード内のどこからでもアクセスできる。`},
{target:`ローカル変数`, content:`特定のスコープ内だけの変数。`},
{target:`ネスト`, content:`ある構造の内部に同じ構造が含まれる状態や構造のこと。<br>入れ子とも呼ぶ。`},
{target:`for-inループ`, content:`キーが文字列であるオブジェクトの列挙可能プロパティすべてに対して、継承された列挙可能プロパティも含めて反復処理する。<br>波括弧{}の中でループ処理をする。値は通常ブラケット記法でアクセスする。<br>for (const key in obj){<br>}`},
{target:`for-ofループ`, content:`配列の各要素にアクセスし一連の値を処理するループを実行。<br>波括弧{}の中でループ処理をする。<br>for (const of array){<br>}`},
{target:`forループ`, content:`括弧で囲みセミコロンで区切った3つの引数と、続いてループ内で実行される文（ふつうはブロック文）から成るループを構成。<br>if文と同じような働きをし、丸括弧()のなかで変数（通常i, j, k）の初期化、条件、条件がいずれfalseになる処理を書く（それぞれはセミコロン';'で区切る）。条件がtrueである限り、波括弧{}の中のループの処理が繰り返される。<br>for (let i = 0; i < 9; i++) {<br>}`},
{target:`whileループ`, content:`テスト条件が真と評価されている間、指定された文を実行するループを作成。<br>条件はその文を実行する前に評価する。if文と同じような働きをし、丸括弧()の中の条件がtrueである限り、波括弧{}の中のループの処理が繰り返される。<br>let n = 0;<br>while (n < 3) {<br>&emsp;n++;<br>}`},
{target:`プリミティブ型`, content:`数値、文字列、ブーリアン、undefined、null。値渡し。`},
{target:`オブジェクト型`, content:`オブジェクト、配列、関数。参照渡し。`},
{target:`テンプレートリテラル`, content:`バッククォートで区切られたリテラルで、文字列になる。<br>非公式に「テンプレート文字列」と呼ばれる。変数をダラーマークの後の波括弧で挟むことで引用することができる。`},
{target:`参照渡し`, content:`オブジェクト型のデータはメモリ中の別のところに作られ、値にはその参照（reference）・アドレスが入る。<br>オブジェクト型データは扱い方によっては参照元の中身を変えてしまう可能性がある。`},
{target:`値渡し`, content:`プリミティブ型データで値そのものを渡す。<br>ある変数から別の変数へ値をわたすと、それぞれの変数は別個の値を持つことになる。`},
{target:`関数（functions）`, content:`タスクを実行したり値を計算したりする一連の文。<br>主なパターンとして①値を返す。②副作用を作り出す。③値を返し、副作用も作り出す。<br>function square(x){<br>&emsp;return x * x;<br>}`},
{target:`関数の呼び出し演算子`, content:`()`},
{target:`引数（parameter）`, content:`関数に渡すデータや情報。<br>関数の呼び出し演算子()の中に記入。`},
{target:`実引数（argument）`, content:`関数呼び出し時に渡される値やデータ。`},
{target:`仮引数（parameter）`, content:`関数定義で受け取るための変数やパラメータ。`},
{target:`返り値（戻り値）`, content:`関数が処理を終えた後に返す値。<br>return文を利用。`},
{target:`関数の中身`, content:`関数内で実行されるコードや処理のまとまり。`},
{target:`return文`, content:`関数から戻り値を返すための文。<br>関数の実行を終了し、呼び出し元に戻る。`},
{target:`値としての関数`, content:`関数は値でもあるので、他の関数に引数として渡すことが可能。<br>引数として渡される関数はコールバック関数と呼ばれる。<br>const square = function(x){return x * x};<br>const consoleLog = function(func, x){console.log(func(x))};<br>consoleLog(square, x); → 関数squareが引数として渡される`},
{target:`副作用`, content:`本来の作用（返り値を返す）以外の動き。<br>スコープ外のなんらかの状態を変えること。`},
{target:`コールバック関数`, content:`他の関数に引数として渡される関数。<br>const square = function(x){return x * x};<br>const consoleLog = function(func, x){console.log(func(x))};<br>consoleLog(square, x); → 関数squareが引数として渡される`},
{target:`クロージャ`, content:`関数が周囲のスコープにある変数を使って作成されると、その変数は関数と組み合され、関数は周囲のスコープを作っていた外側の関数が完了した後でも、その変数を利用できる。<br>活用例：データプライバシー、同じような関数を容易にたくさん作る`},
{target:`データプライバシー`, content:`グローバルスコープからアクセスできないように全体をスコープに入れて作る。<br>そうすることでローカル変数はグローバルスコープからアクセスできなくなる。`},
{target:`カプセル化`, content:`データと関数を一つのコンポーネントに閉じ込め、そのコンポーネントへのアクセスを制御することにより、そのオブジェクトをブラックボックスにすること。<br>ユーザーは隠れた実装ではなくインターフェースを知っているだけで済む。`},
{target:`メソッド`, content:`オブジェクトのプロパティの値が関数のもの（オブジェクトは関数も格納可）。<br>オブジェクトインスタンスごとに内蔵されたタスクとして実行されるインスタンスメソッドと、オブジェクトのコンストラクターで直接呼び出しを行うタスクである静的メソッドの2種類がある。<br>const obj = {<br>&emsp;foo: function () {<br>&emsp;},<br>&emsp;bar: function () {<br>&emsp;},<br>};<br>簡略型<br>const obj = {<br>&emsp;foo() {<br>&emsp;},<br>&emsp;bar() {<br>&emsp;},<br>};<br>const obj = {foo, bar}`},
{target:`Array.prototype`, content:`JavaScript の配列オブジェクト (Array) のプロトタイプを指す。<br>すべての配列インスタンスが共通して使用できるメソッドやプロパティを定義。`},
{target:`String.prototype`, content:`JavaScript の文字列オブジェクト (String) のプロトタイプを指す。<br>文字列インスタンスが共通して使用できるメソッドやプロパティが含まれる。`},
{target:`JavaScript`, content:`インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語。<br>ウェブページでよく使用されるスクリプト言語として知られ、多くのブラウザー以外の環境、例えば Node.js や Apache CouchDB や Adobe Acrobat などでも使用。プロトタイプベースで、マルチパラダイムで、シングルスレッドで、動的な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応。ページのインタラクティブ性を担う。`},
{target:`JavaScriptライブラリ`, content:`他の人が書いたコード。<br>index.htmlにインポートすることで、コードを書く際に使用可能。`},
{target:`Lodash（ローダッシュ）`, content:`オープンソースライブラリ。'_.'で呼び出し。`},
{target:`React`, content:`ユーザインターフェース構築のためのライブラリ。`},
{target:`関数宣言`, content:`プログラムで関数を定義するための宣言手法。<br>function キーワードと、関数の名前、関数への引数のリスト()、関数を定義するJavaScriptの文{}。巻き上げにより、コードの最初に実行。<br>function square(x){<br>&emsp;return x * x;<br>}`},
{target:`関数式`, content:`式の中で関数を定義。<br>関数は無名 (anonymous) にすることができる。また、関数式には名前を指定することもでき、関数が自分自身を参照することもできる。巻き上げは起きない。<br>const square = function (number) {<br>&emsp;return number * number;<br>};<br>const factorial = function fac(n) {<br>&emsp;return n < 2 ? 1 : n * fac(n - 1); → 自分自身を参照<br>};`},
{target:`巻き上げ（ホイスティング）`, content:`インタープリターがコードの実行前に、関数、変数、クラス、インポートの宣言をそのスコープの先頭に移動するように見えるプロセス。`},
{target:`高階関数`, content:`関数を引数として受ける関数。<br>関数を返り値として返す関数。返り値の関数はプロパティやメソッドを持たすことができる。<br>function makeFunc(item){<br>&emsp;const func = (arg) => {console.log(arg)} → 関数作成;<br>&emsp;func.item = item; → プロパティ作成<br>&emsp;func.add = (a, b) => a + b; → メソッド作成<br>&emsp;return func;<br>}<br>const func1 = makeFunc('first'); → 関数作成<br>func1(func1.name); → 'func'（オリジナルの関数名を表示）<br>func1(func1.item); → 'first'<br>func1(func1.add(5, 3)); → 5<br>func1.minus = (a, b) => a - b;  → func1にメソッド追加<br>func1(func1.minus(6, 3)); → 3<br>const func2 = makeFunc('second'); → 新たな関数作成<br>func2(func2.name); → 'func'<br>func1(func1.item); → 'first'<br>func2(func2.item); → 'second'<br>func2(func2.add(6, 3)); → 9<br>func2(func2.minus(6, 3)); → エラー表示`},
{target:`無名関数`, content:`名前を持たない関数。通常、関数式として変数に代入されたり、高階関数の引数として渡されたりする。<br>function(x){return x * x}<br>(x) => x * x;`},
{target:`API（Application Programing Interface）`, content:`ユーザーが色々なデータを利用できるようになる仕組み。`},
{target:`アロー関数`, content:`通常の関数式を簡潔に記述するための構文。<br>(引数) => 返り値。(引数) => {return 返り値}。(引数1, 引数2) => 返り値。() => 返り値 など。<br>const func = (x) => {<br>&emsp;return x * x;<br>}<br>(x) => x * x;<br>x => x * x;`},
{target:`スプレッド構文（...）`, content:`配列やオブジェクト、文字列を展開する演算子。<br>すべての要素を何らかのリストに入れる必要がある場合に使用することができる。また、slice()のように配列を複製やconcat()のように配列を連結できる。残余構文（引数）と外見は似ているが、逆のはたらき。この構文は要素を展開するのに対して、残余構文は複数の要素を集約して1つのオブジェクトに「濃縮」する。<br>const arr = [1, 2, 3]<br>[...arr, 4, 5] → [1, 2, 3, 4, 5]<br>Math.max(...arr) → 3<br>func.apply(null, arr) → func(...arr)（apply()の同様の働き）<br>let arr2 = [...arr]（新しい配列への複製）<br>arr2 = arr2.concat(arr) → arr2 = [...arr, ...arr2]（concat()と同様の働き）<br>[...Array(5)] → undefined×5の配列を作成（繰り返し処理に利用可能）<br><br>let obj1 = { foo: 'bar', x: 42 };<br>let obj2 = { foo: 'baz', y: 13 };<br>let clonedObj = { ...obj1 } → Object { foo: 'bar', x: 42 }<br>let mergedObj = { ...obj1, ...obj2 } → Object { foo: 'baz', x: 42, y: 13 }`},
{target:`残余構文（残余引数）（...）`, content:`関数が不定数の引数を配列として受け入れることができる構文。<br>関数定義の最後の引数で、値が1つでも引数は配列に入れられる（引数の無い場合は空の配列が作られる）。スプレッド構文と外見が似ているが、逆の働きになる。スプレッド構文は要素を展開するのに対して、この構文は複数の要素を集約して1つのオブジェクトに「濃縮」する。<br>function func(a, b, ...theArgs) {}<br><br>function func(a, ...manyMoreArgs) {<br>&emsp;console.log('a', a);<br>&emsp;console.log('manyMoreArgs', manyMoreArgs);<br>}<br><br>func('one', 'two', 'three', 'four', 'five', 'six');<br>'a' → 'one', 'manyMoreArgs' → ['two', 'three', 'four', 'five', 'six'] ←配列であることに注意`},
{target:`分割代入`, content:`配列から値、もしくは、オブジェクトからプロパティを取り出し、別個の変数に代入することが可能。<br>const x = [1, 2, 3, 4, 5];<br>const [y, z, ...rest] = x; → y = 1, z = 2, rest = [3, 4, 5]<br>const obj = { a: 1, b: 2, c:3 };<br>const { a, b } = obj; → a = 1, b = 2<br>const { a, ...rest } = { a: 1, b: 2, c: 3 }; → a = 1, rest = { b: 2, c: 3 } <br>const [red, yellow, green] = ['one', 'two', 'three']; → red = 'one', yellow = 'two', green = 'three'<br>const f = () => [1, 2, 3];<br>const [a, , b] = f(); → a = 1, b = 3`},
{target:`param（パラメータ）`, content:`関数やメソッドに渡される引数のこと。<br>関数が実行される際に、関数内で変数として扱われる。`},
{target:`statement（ステートメント）`, content:`JavaScriptでの実行可能なコードの単位。<br>文は通常、変数の宣言、条件分岐、ループなどの構造を指す。`},
{target:`callbackFn（コールバック関数）`, content:`他の関数に引数として渡され、後で呼び出される関数。<br>主に非同期処理やイベント駆動のプログラミングで使用される。`},
{target:`thisArg（thisの引数）`, content:`関数が呼び出されたときに、thisが参照するオブジェクトを指定する引数。<br>主にコールバック関数内でのthisの値を制御するために使用される。`},
{target:`tryStatement（try文）`, content:`エラーが発生する可能性のあるコードを試し、エラーが発生した場合に処理を行うための文。<br>catch文やfinally文と一緒に使用される。`},
{target:`exceptionVar（例外変数）`, content:`try文内で発生したエラーの情報を保持するための変数。<br>通常、catch文で指定され、エラーオブジェクトが代入される。`},
{target:`catchStatement（catch文）`, content:`try文で発生したエラーを捕捉し、適切な処理を行うための文。`},
{target:`finallyStatement（finally文）`, content:`try文の後に続き、エラーの有無にかかわらず必ず実行される文。<br>クリーンアップ処理に使用されることがある。`},
{target:`prop（プロパティ）`, content:`オブジェクト内の変数や関数などのメンバー。<br>オブジェクトの特定の特性や挙動を表現する。`},
{target:`object（オブジェクト）`, content:`JavaScriptにおけるデータ型の一つで、プロパティとメソッドを持つ複合データ構造。`},
{target:`constructor（コンストラクタ）`, content:`クラスやオブジェクトのインスタンスを生成するための特別なメソッド。<br>通常、newキーワードとともに使用される。`},
{target:`argument（arg, 引数）`, content:`関数やメソッドに渡される値。<br>パラメータとして関数内で使用される。`},
{target:`rv（戻り値）`, content:`関数が実行された結果として返す値。<br>通常、return文で指定される。`},
{target:`selecter`, content:`CSSセレクターを指定する文字列。`},
{target:`listener`, content:`指定されたイベント発生時に実行される関数。`},
{target:`arg（引数）`, content:`引数の略称。<br>関数やメソッドに渡される値として利用。`},
{target:`truthy（真値）`, content:`論理値のコンテキストに現れた時に true とみなされる値のこと。<br>偽値 (falsy) として定義された値 (null、undefined、false、NaN、0、-0、0n、'') を除くすべての値。<br>const removeFalsy = (array) => array.filter(x => (x) ? x: NaN); → 配列内の偽値を取り除く`},
{target:`falsy（偽値）`, content:`論理型コンテキストに現れたときに偽とみなされる値。<br>null、undefined、false、NaN、0、-0、0n、''。<br>const removeFalsy = (array) => array.filter(x => (x) ? x: NaN); → 配列内の偽値を取り除く`},
{target:`再帰関数`, content:`関数が自身の定義内で自己参照的に呼び出されること。<br>問題を小さな部分に分割し、解を組み立てるのに有用。`},
{target:`再帰の深さ`, content:`再帰関数が自身を呼び出す深さ。<br>深すぎる再帰はスタックオーバーフローを引き起こす可能性がある。`},
{target:`スタック`, content:`プログラムが関数の呼び出しや変数の保持などの情報を一時的に保存するデータ構造。<br>再帰関数が呼ばれるとスタックに新しいフレームが積まれる。`},
{target:`プロトタイプ`, content:`JavaScript オブジェクトが他のものから機能を継承する仕組み。`},
{target:`クラス`, content:`オブジェクト指向プログラミングにおいて、同じ性質や振る舞いを共有するオブジェクトの設計図。<br>定義された属性（プロパティ）や振る舞い（メソッド）がインスタンスに反映される。`},
{target:`インスタンス`, content:`クラスを基にして作られた具体的なオブジェクト。<br>クラスから複数生成でき、それぞれの独自のデータを持つ。オブジェクトの一種で、あるクラスの特定の実体を持つ。`},
{target:`インスタンス化`, content:`クラスをもとにオブジェクトを生成するプロセス。`},
{target:`コンストラクター`, content:`オブジェクト指向プログラミングにおいて、クラスから新しいオブジェクトを生成する際に呼び出される特別なメソッド。<br>クラス内で定義され、そのクラスのインスタンスを初期化するための特別なメソッド。インスタンスを生成するときに呼び出され、インスタンスの初期状態を設定。`},
{target:`静的メソッド・クラスメソッド`, content:`インスタンスではなくクラスに関連づけられたメソッド。<br>インスタンスの状態にアクセスせず、通常はクラス全体に関連する処理や操作を行うために使用。`},
{target:`静的プロパティ・クラスプロパティ`, content:`インスタンスではなくクラスに関連づけられたプロパティ。`},
{target:`動的メソッド`, content:`インスタンスに対して呼び出されるメソッド。<br>インスタンスの状態にアクセスでき、通常はインスタンスのプロパティや他のメソッドを操作するために使用。クラス内で定義され、クラスから生成された各インスタンスに属す。`},
{target:`オブジェクト`, content:`クラスの実体化であり、クラスの設計図に基づいて作られた具体的なデータ構造。<br>クラスのプロパティやメソッドを持ち、これによりデータと振る舞いをカプセル化。実際にメモリ上に存在し、実行時に変数に割り当てることができる。`},
{target:`オブジェクト指向`, content:`プログラミングのパラダイムの一つで、プログラムをオブジェクトと呼ばれる個別のエンティティの集合に基づいて構築する考え方。<br>オブジェクトはデータ（プロパティ）とそのデータを操作するための手続き（メソッド）を組み合わせたもの。`},
{target:`プロトタイプベース`, content:`オブジェクト指向プログラミングのひとつ。<br>クラスを明示的に定義するのではなく、別のクラスのインスタンスにプロパティやメソッドを追加するという手法。JavaScriptなどで使用。`},
{target:`クラスベース`, content:`オブジェクト指向プログラミングのひとつ。<br>オブジェクトの生成にクラスを用いるスタイルを指す。オブジェクトは、総じてクラスを実体化したインスタンスと定義される。Pythonなどで使用。`},
{target:`this`, content:`現在のオブジェクトを指すキーワード。<br>値はどのように関数が呼ばれたかによって決定される (実行時結合)。これは実行時に代入によって設定することはできず、関数が呼び出されるたびに異なる可能性があるので注意が必要。`},
{target:`ファクトリ関数`, content:`オブジェクトを生成して返す関数。<br>同じプロパティやメソッドを持つ複数のオブジェクトを簡単に生成することができる。オブジェクトの作成と初期化の責任を持ち、関数内で新しいオブジェクトを作成し、そのオブジェクトに必要なプロパティやメソッドを設定し、最終的にそのオブジェクトを返す。`},
{target:`イテレータ―`, content:`要素を一つずつ順番に処理するオブジェクト。`},
{target:`HTMLCollection`, content:`要素の汎用的な集合を表し、リストから選択するためのメソッドとプロパティを提供するインターフェース。<br>名前とインデックスの両方で、自身のメンバーをプロパティとして直接公開。HTML DOM内のこれは生きて (live) いる。そのため、元になった文書が変更された時点で自動的に更新される。document.formsやdocument.getElementsByTagName('div')などで取得。`},
{target:`NodeList`, content:`ノードの集合であり、 Node.childNodes などのプロパティやdocument.querySelectorAll() などのメソッドの返値として用いられる。<br>生きたものと静的なものの2種類がある。DOMが変化すると、自動的に集合が更新されることを生きたと呼ぶ。静的なものの場合、DOM内の変更が集合の内容に影響を与えない。document.querySelectorAll()メソッドは、静的なものを返す。`},
{target:`コンテキスト`, content:`実行される場所。<br>thisの値に影響を与える。`},
{target:`関数コンテキスト`, content:`関数内でのthisの値は、関数の呼び出し方によって異なる。<br>関数の呼び出し時にthisの値を特定の値に設定するには、call()またはapply()を使用する。`},
{target:`ランタイム`, content:`実行環境。`},
{target:`フロントエンド`, content:`面表示や入力・操作の受け付けなど、主に利用者が直接触れる部分。`},
{target:`バックエンド`, content:`フロントエンドから受け取ったデータを処理・保存したり、フロントエンドの要求に応じてデータや機能を提供する構成要素。`},
{target:`同期処理`, content:`同時に1つのタスクしか実行されない。`},
{target:`非同期処理`, content:`同時に複数のタスクを処理する。`},
{target:`イベント駆動形`, content:`発行されるイベントを下敷きにさまざまな処理を行う特徴。`},
{target:`Non-Blocking I/O`, content:`I/O（入出力）をブロッキングしないこと。`},
{target:`I/O（Input/Output）`, content:`出力。`},
{target:`キュー`, content:`先頭が常に最も古い要素になるデータ構造で、新しい要素は必ず末尾に追加される。<br>取り出すときは常に先頭の最も古い要素から取り出される。`},
{target:`イベントループ`, content:`プログラムが新たなイベントを待ち続ける状態。`},
{target:`アイドル`, content:`使用されていない、何の処理も行っていない、すぐ使用できるよう待機などの状態。`},
{target:`スレッド`, content:`並行処理に対応したマイクロプロセッサ（CPU/MPU）およびオペレーティングシステム（OS）におけるプログラムの最小の実行単位。`},
{target:`シングルスレッド`, content:`プログラムの処理の流れが一本のみである状態。`},
{target:`マルチスレッド`, content:`一つのコンピュータプログラムを実行する際に、複数の処理の流れを並行して進めること。<br>また、そのような複数の処理の流れ。`},
{target:`プロセス`, content:`実行されているプログラムを管理する単位。`},
{target:`C10K問題`, content:`Apache HTTP ServerなどのWebサーバソフトウェアとクライアントの通信において、クライアントが約1万台に達すると、Webサーバーのハードウェア性能に余裕があるにもかかわらず、レスポンス性能が大きく下がる問題。<br>Apacheはクライアントの接続一つ一つに対してプロセスを生成する仕様となっている。そのため大量のクライアントから接続があった場合、その数だけプロセスを生成しなければならない。しかし、WindowsあるいはLinuxなどのUNIX系OSでは、同時に起動できるプロセスに32767(2^15-1)個の制限がある。この制限を超えるとプロセスを新規生成することができなくなるため、既にあるリクエストの処理が終わるまで新たな接続は待たなければならない。回避には、サーバーサイドでNode.jsなどの駆動方式を持ったソフトウェアを使用する。`},
{target:`バンドル`, content:`複数のファイルを一つにまとめること。<br>単体でも提供可能な製品やサービスを、複数組み合わせてセットで販売したり、別の製品やサービスに付属して販売、提供すること。`},
{target:`バンドラー`, content:`ファイルをバンドルするツールやソフト。`},
{target:`CLI（Command line interface）`, content:`コンピュータやソフトウェアが利用者に情報を提示したり操作を受け付けたりする方法（UI）の類型の一つで、すべてのやり取りを文字によって行う方式。`},
{target:`パッケージ`, content:`一つのソフトウェアを構成する実行プログラムやソースコード、設定ファイル、データファイル、ドキュメントなどを特定の形式の圧縮ファイルなどにまとめたもの。`},
{target:`パッケージマネージャー`, content:`リポジトリに接続してパッケージの一覧を取得し、利用者が指示したパッケージを取り寄せて自動的に展開、導入（インストール）して実行可能な状態にする。`},
{target:`リポジトリ`, content:`ソフトウェア開発などに用いるバージョン管理システムやプロジェクト管理システムなどで、プロジェクトを構成するプログラムのソースコードやドキュメント、関連する各種のデータやファイルなどを一元的に管理する格納場所。`},
{target:`ホスティング`, content:`通信事業者やインターネットサービスプロバイダが提供するサーバーのレンタルサービス。`},
{target:`レジストリ`, content:`Windowsでシステム（OS）やアプリケーションソフトの設定データなどを一元管理するデータベース。<br>ストレージ内のシステムドライブに保管されている。各項目はキー（key、項目名）と値（value）を一対一に対応付けたセットとして記録されている。値にはいくつかのデータ型が用意されており、文字列を格納できる文字列値や、任意のバイト列を格納できるバイナリ値、32ビットのビット列を格納できるDWORD値などが利用できる。`},
{target:`トランスパイル`, content:`あるプログラミング言語で書かれたプログラムを、別のプログラミング言語のプログラムに変換すること。`},
{target:`SSR（Server Side Rendering）`, content:`フロントエンドで生成されるページを、サーバーサイドで事前にレンダリングしてHTMLとして準備する。`},
{target:`レンダリング`, content:`何らかのデータ形式やデータ構造で記述された描画内容を表すデータ群をソフトウェアが読み込み、内容を解釈して画像や動画、音声などを生成する。<br>結果をそのまま即座に画面に表示することを指すが、生成結果を何らかのデータ形式でファイルなどに記録・保存したり、ネットワークを介して別のコンピュータに送信・配信することを含む場合もある。`},
{target:`BFF（Backend For Frontend）`, content:`フロントエンドのために複数のAPIなどを束ねる役割を持つバックエンド。`},
{target:`コンテキストスイッチ`, content:`コンピュータの処理装置（CPU）が現在実行している処理の流れ（プロセス、スレッド）を一時停止し、別のものに切り替えて実行を再開すること。<br>あるプロセスを実行している最中に、処理を中断してCPU内部のレジスタの状態などを特定のメモリ領域などに保存し、同じように途中で中断されていた別のプロセスの実行状態を読み込んで処理を再開する。複数のプロセスを並行に実行することができる。`},
{target:`モジュール`, content:`機能単位、交換可能な構成部分などを意味する。<br>機器やシステムの一部を構成するひとまとまりの機能を持った部品で、システム中核部や他の部品への接合部（インターフェース）の仕様が明確に定義され、容易に追加や交換ができるようなもののことを指す。`},
{target:`シングルトン`, content:`オブジェクト指向プログラミングにおけるクラスのデザインパターンの一つ。<br>実行時に一つしかインスタンスを作ることができないように設計。プログラム上では常に同一のインスタンスを参照するように強制することができる。`},
{target:`キャメルケース（camelCase）`, content:`先頭の単語だけ小文字にしてあとの単語の先頭は大文字にする。<br>JavaScriptやJavaなどのプログラミング言語でよく使用されている。`},
{target:`パスカルケース（PascalCase）`, content:`すべての単語の先頭が大文字になっている。<br>アッパーキャメルケースとも呼ばれ、クラス名とかで使われている。`},
{target:`スネークケース（snake_case）`, content:`アンダースコア（_）で各単語を区切っていく規則。<br>PythonやRubyなどのプログラミング言語でよく使用されている。`},
{target:`ケバブケース（kebab-case）`, content:`ハイフン（-）で各単語を区切っていく規則。<br>URLやHTMLのクラス名でよく使用されている。`},
{target:`データモデリング`, content:`データの流れと管理システムを図とテキストで定義・可視化すること。<br>データの「設計図」を作るプロセスであり、その設計図を実際に建物「データベース」に建てる工程。<br>より効率的で優れたデータ管理を促進することを目的とし、データを整理し、整え、ルールで管理することで、情報をより効果的に活用できるようになる。<br>まず、具体的なデータの要件や目的を把握、データをどのように構造化するかを決定（例：名前、住所、電話番号などの顧客テーブルを作成）。<br>次に、データの一貫性や整合性を保つための条件や規則など、データに適用される制約やルールを定義する（例：顧客ID、注文日は未来の日付など）。<br>これらの手順を踏んでデータモデルを作成し、データベース管理システム (DBMS) を使って実際にデータモデルを実装する。DBMSを使うことで、データを効率的に格納し、検索し、更新することができる。<br>データモデリング方法論とは、データを整理し、パターン化し、組織化するための手法やルールの集まりで、情報を理解しやすくし効率的な管理に役立つ。<br>データモデルのインスタンスには、概念スキーマ、論理スキーマ、物理スキーマの3種類ある。`},
{target:`データモデリングのプロセス`, content:`最初に概念データモデルを作成し、次に論理データモデル、最後に物理データモデルを作成。<br>データを詳細に可視化してから、データベースの技術要件を指定できる。<br>①エンティティの特定：社内のさまざまなエンティティや部門を特定し、リストアップ<br>②各エンティティの主要なプロパティを特定：社内の各エンティティを区別する属性を特定<br>③エンティティ間の関係（リレーションシップ）を特定：相互に関連するエンティティを提示し、それらの関係を可視化するモデルを開発<br>④モデルに追加するデータ属性を特定：モデルに含める必要のある特定の属性（顧客のメールアドレスや名前など）をリストアップ<br>⑤属性のマッピング：データ属性を作成し、各エンティティにマッピング<br>⑥最終確認と正確性の検証：データモデルを確定する前に、意思決定者はその正確性を検証し、初期のフレームワークに関連するエンティティと属性がすべて含まれていることを確認`},
{target:`データモデリングの利点`, content:`収集したデータをより効率的に整理することができ、データを最大限に活用し、重要なビジネスプロセスをサポートすることができる。<br>その他の利点として、データの一貫性、データ品質の向上、効率的なデータベース設計、エラーと冗長性の低減、企業全体の透明性の向上などがあげられる。`},
{target:`スキーマ`, content:`データベースの構造を定義したもので、データベース管理システム（DBMS）にサポートされる形式言語で記述。<br>関係データベースでは、関係（表）とその中の属性（フィールド）や、属性と関係の関連を定義。`},
{target:`概念スキーマ・概念モデル・概念データモデル`, content:`概念と概念間の関係の定義。<br>データベース設計における抽象的なレベルの表現でデータベース内の情報を組織化し、その構造や関係を表すためのモデル。データモデル全体の枠組みを提供し、組織内の異なる利用者やシステムが共通の理解を持つことを可能にする。データベース内の情報の本質的な構造を表現し、それがどのように関連付けられるかを明確にする。これにより、データベースがより柔軟で、変更に対応しやすくなる。`},
{target:`論理スキーマ・論理モデル・論理データモデル`, content:`実体とその属性、実体間の関係の定義。<br>データベースの設計の概要を表す。特定のデータ管理技術を前提として対象領域を記述するデータモデルだが、特定のデータベース管理製品に依存することなく、汎用的なデータ構造を用いて表現する。データベース内の情報をどのように構造化し、関連付けるかを示す設計図のようなもの。<br>論理スキーマが「何を」するかを示すのに対し、物理スキーマは「どのように」するかを示す。`},
{target:`物理スキーマ・物理モデル・物理データモデル`, content:`論理スキーマの具体的実装。<br>特定のデータ管理技術の観点で記述されるデータモデル。具体的なデータベース管理製品に依存し、データがどのようにストレージ（補助記憶装置）に格納されるかを詳細に定義。論理スキーマで定義されたデータの論理的な構造を、物理的なストレージにどのように配置するかを示す。<br>論理スキーマが「何を」するかを示すのに対し、物理スキーマは「どのように」するかを示す。<br>定義される要素にはフィールド、列、インデックス、トリガー、制約があげられる。`},
{target:`関係データモデリング`, content:`複数のテーブルに格納されたデータ要素の関係をマッピングする手法。<br>物理データの格納状況を詳細に把握する必要がないため、多くのモデラーが採用。`},
{target:`ERデータモデリング`, content:`エンティティをマッピングし、これらのエンティティに関連する特定の属性を識別するための、より複雑な関係データモデル。<br>エンティティには、顧客データ、従業員データ、製品情報、請求書などが含まれる。属性には、顧客のメールアドレス、従業員の姓、製品価格、請求書の作成日などが含まる。<br>エンティティは長方形で表され、属性は楕円で表され、エンティティ間の関係は矢印で表され、関連の性質や種類が記述される。`},
{target:`エンティティ`, content:`データベース内で重要な情報のまとまりを表す用語。<br>データベース内の「何か」を表し、顧客、商品、注文、従業員などを示す。<br>顧客エンティティは実際のお店やウェブサイトで商品を購入する人々の集まりを、商品エンティティはそのお店やウェブサイトで販売されている実際の商品を表す。<br>各エンティティはその特徴や詳細を示す関連する情報や属性を持つ。顧客エンティティには名前、住所、電話番号などの属性が、商品エンティティには商品名、価格、在庫数などの属性がある。`},
{target:`階層型データモデリング`, content:`データの親子関係をツリー状に表現したもの。`},
{target:`次元データモデリング`, content:`企業がデータウェアハウスに保存された情報に効率的にアクセスできるように、データ検索スピードを最適化するように設計。<br>主にBI（ビジネスインテリジェンス）アプリケーションのデータマートやデータウェアハウスで使用され、製品の購入などのイベントやトランザクションに関する情報を格納するファクトテーブルを使用。`},
{target:`オブジェクト指向データモデリング`, content:`エンティティをオブジェクトとして抽象化。<br>同じ属性を共有するオブジェクトをクラスに移動し、階層的に分類する。ERモデリングと類似。`},
{target:`セマンティクス`, content:`データやコードにより記述者が表そうとした意味や意図、内容のこと。`},
{target:`シンタックス`, content:`コードが形式的に言語仕様に従って記述されているかどうかを表す概念。`},
{target:`トピックス インポスター症候群`, content:`うまくやっているという客観的な証拠があるのに、自分は能力不足だと思い込む心理状態。`},
{target:`プロダクトマネージャー（PM）`, content:`ビジネス、市場、ユーザーの価値を理解して最も適切な製品の方向性を定義。<br>｢実装すべき機能｣に優先順位をつける。フラットなチームでリーン／アジャイルな開発チームを推進。`},
{target:`プロダクトデザイナー（PD）`, content:`ユーザーを正しく理解するために、ユーザーテスト、インタビュー、アナリティクスを繰り返し計画・実行。製品やサービスを通じて得られる体験(UX)と、UXを実現する接点(UI)を生み出す。`},
{target:`アジャイル開発エンジニア`, content:`技術を正しく理解し、リーン/アジャイルなプログラミングを行なう。<br>エレガントで高品質なソフトウェア・ソリューションを提供。業界や組織で包括的に適用されるソフトウェアエンジニアリングへのアプローチを実践、指導する。`},
{target:`業務専門家`, content:`機械学習などデータ解析でのプロジェクト全般のアイデア出し、入力データ項目の決定など。`},
{target:`データエンジニア`, content:`機械学習などデータ解析でのデータの入手、加工、学習データの準備。`},
{target:`データサイエンティスト`, content:`機械学習などデータ解析でのモデルの作成、モデルの最適化。`},
]
