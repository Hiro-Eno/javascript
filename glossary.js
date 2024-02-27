// glossaryファイル JavaScript
`use strict`
const glossary = [
{target:`算術演算子（operator）`, content:`記号や英数字によって構成された予約語で、データに対する演算内容を表す（+、-、*、/、%、**）。`},
{target:`文字列型`, content:`’Hello world!'など文字列のデータ型。`},
{target:`数値型`, content:`1、5、1.001など数値のデータ型。`},
{target:`ブーリアン型`, content:`true、falseのデータ型。`},
{target:`高水準言語`, content:`プログラミング言語のJavaScript、Python、C++など。`},
{target:`アセンブリ言語`, content:`ハードウェアに直接対話する中級言語で、機械語との対応があるプログラミング言語。`},
{target:`低水準言語`, content:`ハードウェアに近い表現を使用し、直接の制御が可能なプログラミング言語。`},
{target:`文字列結合`, content:`2つの文字列を結合すること（'butter' + 'fly'）。`},
{target:`コンソール`, content:`テキストベースのユーザーインターフェースで、プログラムの出力や入力を行う画面。`},
{target:`キーワード`, content:`プログラムの構造や動作を指定するための予約された言葉や識別子。`},
{target:`変数`, content:`データを格納するためのメモリ上の場所で、値が変更可能なプログラムの要素。`},
{target:`関数シグネチャ`, content:`関数の動作を説明するのに使用。関数名、引数のデータ型と数、返り値のデータ型を持つ。`},
{target:`比較演算子（comparison operator）`, content:`プログラムで値を比較するために使用される演算子で、等しい、大なり、小なりなどの関係を表現する。`},
{target:`式（epression）`, content:`値を導き出すもの。`},
{target:`型（type）`, content:`データのカテゴリ（例：数値型やブーリアン型）。`},
{target:`論理式（logical expression）`, content:`論理演算子を使用して組み立てられた式で、真（true）または偽（False）の結果を返す。`},
{target:`HTML（Hyper Text Markup Language）`, content:`Webページの内容と構成を記述するための言語。`},
{target:`タグ`, content:`HTMLドキュメントでの各要素の特性をマーキングするもの。`},
{target:`ブロック`, content:`プログラム内の複数のステートメントやコード行をまとめ、1つのまとまりとして扱うためのコードブロック。通常、中括弧{}で囲まれ、その中に複数のコード行が含まれる。`},
{target:`インライン`, content:`コードや要素が本来の文脈から外れずに、その場で直接配置されること。それぞれ行や要素の中に直接挿入される。`},
{target:`if文（条件分岐、conditionals）`, content:`プログラム内である条件が満たされた場合や特定の状況に応じて、異なるコードブロックや処理が実行されるプログラムの構造。<br>***(){}else ***(){} else {}`},
{target:`オペランド（operand）`, content:`演算子で操作されるデータを表す命令の一部。式や演算子において操作される値またはオブジェクト。二項演算子の場合、それに適用される数値や変数など。`},
{target:`条件（condition）`, content:`制御構造や決定構造において評価され、真偽値を返す式。通常、条件文（if文やwhile文など）で使用される。`},
{target:`条件 (三項) 演算子`, content:`3 つのオペランドをとる演算子。条件に続いて疑問符 (?)、そして条件が真値であった場合に実行する式（返り値）、コロン (:) が続き、条件が偽値であった場合に実行する式（返り値）が最後に来る。<br>condition ? exprIfTrue : exprIfFalse;<br>sell < 100 ? {tip = '$2.00'} : {tip='$10.00'};<br>condition ? rvTrue : rvFalse;<br>sell < 100 ? '$2.00' : '$10.00';`},
{target:`テスト駆動型開発（Test Driven Development, TDD）`, content:`ソフトウェアの開発プロセス。実際のプロダクションコード（production code）を書く前に、機能の要件と期待値を書く。1.テストを書く、2.テストを実行、3.必要最小限のコードを書く、4.テストを再実行、5.1～4繰り返し、6.リファクタリング。テストではエッジケースも考慮。`},
{target:`コーディング規約 スタイルガイドライン`, content:`コードの品質を高めるための基準。参考サイト：beautifier.io、AirBnbスタイルガイド`},
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
{target:`配列（array）`, content:`項目のまわりには各括弧[]をつける。各項目はコンマ','で分ける。複数の要素を保存。複数の値のリスト。インデックスは0から。`},
{target:`要素（element）`, content:`プログラムやデータ構造において、配列やリストなどの中に格納されている各単位やデータの単位。通常、要素はインデックスやキーによって識別。`},
{target:`インデックス`, content:`配列やリストなどのデータ構造において、各要素に割り当てられた一意の番号や位置を指す値。通常、0から始まる整数値で表され、指定された位置の要素にアクセスするために使用。`},
{target:`ミュータブル`, content:`変化させることができるデータ。`},
{target:`イミュータブル`, content:`変化できないデータ。`},
{target:`オブジェクト`, content:`どのような種類の値でも格納できる。中括弧{}で周りを囲む。値を参照するときは文字列のキーを使う。キーと値はコロン':'で区切る。それぞれのキーと値のペアの間はコンマ','で区切る。`},
{target:`key valueペア`, content:`キーと値のペア。`},
{target:`ドット記法`, content:`オブジェクトの値のアクセスの仕方。ドット'.'の後にキーを書く。`},
{target:`ブラケット記法`, content:`配列やオブジェクトの値のアクセスの仕方。角括弧[]の中に配列はインデックス、オブジェクトはキーを書く。`},
{target:`スコープ`, content:`ひとつの区切られた範囲であり、この中で宣言された変数は、この範囲でしかアクセスできない。外から内の変数にアクセスはできない。`},
{target:`関数スコープ`, content:`関数が呼び出されると作成される。関数内で宣言された変数はこの範囲でのみアクセスでき、関数の処理が終わると消去される。仮引数もこの範囲でしか使えない。`},
{target:`ブロックスコープ`, content:`波括弧{}で囲んで作る。この範囲で宣言された変数は、その中でのみ使用可能、処理が終わると消去される。if文やforループなど。`},
{target:`ローカルスコープ`, content:`関数スコープやブロックスコープのこと。`},
{target:`グローバルスコープ`, content:`最上位の範囲。ローカルスコープの外側。ローカルスコープで宣言された変数はアクセスできない。この範囲で宣言された変数は、コード内のどこからでもアクセスできる。`},
{target:`ローカル変数`, content:`特定のスコープ内だけの変数。`},
{target:`ネスト`, content:`ある構造の内部に同じ構造が含まれる状態や構造のこと。入れ子とも呼ぶ。`},
{target:`for-inループ`, content:`キーが文字列であるオブジェクトの列挙可能プロパティすべてに対して、継承された列挙可能プロパティも含めて反復処理する。波括弧{}の中でループ処理をする。値は通常ブラケット記法でアクセスする。<br>for (const key in obj){}`},
{target:`for-ofループ`, content:`配列の各要素にアクセスし一連の値を処理するループを実行。波括弧{}の中でループ処理をする。<br>for (const of array){}`},
{target:`forループ`, content:`括弧で囲みセミコロンで区切った 3 つの引数と、続いてループ内で実行される文（ふつうはブロック文）から成るループを構成。if文と同じような働きをし、丸括弧()のなかで変数（通常i, j, k）の初期化、条件、条件がいずれfalseになる処理を書く（それぞれはセミコロン';'で区切る）。条件がtrueである限り、波括弧{}の中のループの処理が繰り返される。<br>for (let i = 0; i < 9; i++) {}`},
{target:`whileループ`, content:`テスト条件が真と評価されている間、指定された文を実行するループを作成。条件はその文を実行する前に評価する。if文と同じような働きをし、丸括弧()の中の条件がtrueである限り、波括弧{}の中のループの処理が繰り返される。<br>let n = 0;<br>while (n < 3) {n++;}`},
{target:`プリミティブ型`, content:`数値、文字列、ブーリアン、undefined、null。値渡し。`},
{target:`オブジェクト型`, content:`オブジェクト、配列、関数。参照渡し。`},
{target:`参照渡し`, content:`オブジェクト型のデータはメモリ中の別のところに作られ、値にはその参照（reference）・アドレスが入る。オブジェクト型データは扱い方によっては参照元の中身を変えてしまう可能性がある。`},
{target:`値渡し`, content:`プリミティブ型データで値そのものを渡す。ある変数から別の変数へ値をわたすと、それぞれの変数は別個の値を持つことになる。`},
{target:`関数（functions）`, content:`タスクを実行したり値を計算したりする一連の文。主なパターンとして①値を返す。②副作用を作り出す。③値を返し、副作用も作り出す。<br>function square(x){<br>&emsp;return x * x;<br>}`},
{target:`関数の宣言`, content:`プログラムで関数を定義するための宣言手法。<br>function square(x){<br>&emsp;return x * x;<br>}`},
{target:`関数の呼び出し演算子`, content:`()`},
{target:`引数（parameter）`, content:`関数に渡すデータや情報。関数の呼び出し演算子()の中に記入。`},
{target:`実引数（argument）`, content:`関数呼び出し時に渡される値やデータ。`},
{target:`仮引数（parameter）`, content:`関数定義で受け取るための変数やパラメータ。`},
{target:`返り値（戻り値）`, content:`関数が処理を終えた後に返す値。return文を利用。`},
{target:`関数の中身`, content:`関数内で実行されるコードや処理のまとまり。`},
{target:`return文`, content:`関数から戻り値を返すための文。関数の実行を終了し、呼び出し元に戻る。`},
{target:`値としての関数`, content:`関数は値でもあるので、他の関数に引数として渡すことが可能。引数として渡される関数はコールバック関数と呼ばれる。<br>const square = function(x){return x * x};<br>const consoleLog = function(func, x){console.log(func(x))};<br>consoleLog(square, x); → 関数squareが引数として渡される`},
{target:`副作用`, content:`本来の作用（返り値を返す）以外の動き。スコープ外のなんらかの状態を変えること。`},
{target:`コールバック関数`, content:`他の関数に引数として渡される関数。<br>const square = function(x){return x * x};<br>const consoleLog = function(func, x){console.log(func(x))};<br>consoleLog(square, x); → 関数squareが引数として渡される`},
{target:`クロージャ`, content:`関数が周囲のスコープにある変数を使って作成されると、その変数は関数と組み合され、関数は周囲のスコープを作っていた外側の関数が完了した後でも、その変数を利用できる。活用例：データプライバシー、同じような関数を容易にたくさん作る`},
{target:`データプライバシー`, content:`グローバルスコープからアクセスできないように全体をスコープに入れて作る。そうするとローカル変数はグローバルスコープからアクセスできなくなる。`},
{target:`メソッド`, content:`オブジェクトでのプロパティの値が関数のもの（オブジェクトは関数も格納可）。`},
{target:`プロパティ`, content:`オブジェクトのキーと値のペアのこと。`},
{target:`Array.prototype`, content:`JavaScript の配列オブジェクト (Array) のプロトタイプを指す。すべての配列インスタンスが共通して使用できるメソッドやプロパティが定義。`},
{target:`String.prototype`, content:`JavaScript の文字列オブジェクト (String) のプロトタイプを指す。文字列インスタンスが共通して使用できるメソッドやプロパティが含まれる。`},
{target:`JavaScript`, content:`インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語。ウェブページでよく使用されるスクリプト言語として知られ、多くのブラウザー以外の環境、例えば Node.js や Apache CouchDB や Adobe Acrobat などでも使用。プロトタイプベースで、マルチパラダイムで、シングルスレッドで、動的な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応。ページのインタラクティブ性を担う。`},
{target:`JavaScriptライブラリ`, content:`他の人が書いたコード。index.htmlにインポートすることで、コードを書く際に使用可能。`},
{target:`Lodash（ローダッシュ）`, content:`オープンソースライブラリ。'_.'で呼び出し。`},
{target:`React`, content:`ユーザインターフェース構築のためのライブラリ。`},
{target:`高階関数`, content:`関数を引数として受ける関数。関数を返り値として返す関数。`},
{target:`無名関数`, content:`名前を持たない関数。通常、関数式として変数に代入されたり、高階関数の引数として渡されたりする。<br>function(x){return x * x}<br>(x) => x * x;`},
{target:`API（Application Programing Interface）`, content:`ユーザーが色々なデータを利用できるようになる仕組み。`},
{target:`アロー関数`, content:`通常の関数式を簡潔に記述するための構文。(引数) => 返り値。(引数) => {return 返り値}。(引数1, 引数2) => 返り値。() => 返り値 など。<br>(x) => {<br>&emsp;return x * x;<br>}<br>(x) => x * x;<br>x => x * x;`},
{target:`スプレッド構文（...）`, content:`配列やオブジェクト、文字列を展開する演算子。すべての要素を何らかのリストに入れる必要がある場合に使用することができる。また、slice()のように配列を複製やconcat()のように配列を連結できる。残余構文（引数）と外見が似ているが、逆の働きになる。この構文は要素を展開するのに対して、残余構文は複数の要素を集約して 1 つのオブジェクトに「濃縮」する。<br>const arr = [1, 2, 3]<br>[...arr, 4, 5]→[1, 2, 3, 4, 5]<br>Math.max(...arr)→3<br>func.apply(null, arr) → func(...arr)（apply()の同様の働き）<br>let arr2 = [...arr]（新しい配列への複製）<br>arr2 = arr2.concat(arr)→arr2 = [...arr, ...arr2]（concat()と同様の働き）<br>[...Array(5)]→undefined×5の配列を作成（繰り返し処理に利用可能）<br><br>let obj1 = { foo: 'bar', x: 42 };<br>let obj2 = { foo: 'baz', y: 13 };<br>let clonedObj = { ...obj1 }→Object { foo: 'bar', x: 42 }<br>let mergedObj = { ...obj1, ...obj2 }→Object { foo: 'baz', x: 42, y: 13 }`},
{target:`残余構文（残余引数）（...）`, content:`関数が不定数の引数を配列として受け入れることができる構文。関数定義の最後の引数で、値が1つでも引数は配列に入れられる（引数の無い場合は空の配列が作られる）。スプレッド構文と外見が似ているが、逆の働きになる。スプレッド構文は要素を展開するのに対して、この構文は複数の要素を集約して 1 つのオブジェクトに「濃縮」する。<br>function func(a, b, ...theArgs) {}<br><br>function func(a, ...manyMoreArgs) {<br>&emsp;console.log('a', a);<br>&emsp;console.log('manyMoreArgs', manyMoreArgs);<br>}<br><br>func('one', 'two', 'three', 'four', 'five', 'six');<br>'a'→'one', 'manyMoreArgs'→['two', 'three', 'four', 'five', 'six'] ←配列であることに注意`},
{target:`param（パラメータ）`, content:`関数やメソッドに渡される引数のこと。関数が実行される際に、関数内で変数として扱われる。`},
{target:`statement（ステートメント）`, content:`JavaScriptでの実行可能なコードの単位。文は通常、変数の宣言、条件分岐、ループなどの構造を指す。`},
{target:`callbackFn（コールバック関数）`, content:`他の関数に引数として渡され、後で呼び出される関数。主に非同期処理やイベント駆動のプログラミングで使用される。`},
{target:`thisArg（thisの引数）`, content:`関数が呼び出されたときに、thisが参照するオブジェクトを指定する引数。主にコールバック関数内でのthisの値を制御するために使用される。`},
{target:`tryStatement（try文）`, content:`エラーが発生する可能性のあるコードを試し、エラーが発生した場合に処理を行うための文。catch文やfinally文と一緒に使用される。`},
{target:`exceptionVar（例外変数）`, content:`try文内で発生したエラーの情報を保持するための変数。通常、catch文で指定され、エラーオブジェクトが代入される。`},
{target:`catchStatement（catch文）`, content:`try文で発生したエラーを捕捉し、適切な処理を行うための文。`},
{target:`finallyStatement（finally文）`, content:`try文の後に続き、エラーの有無にかかわらず必ず実行される文。クリーンアップ処理に使用されることがある。`},
{target:`prop（プロパティ）`, content:`オブジェクト内の変数や関数などのメンバー。オブジェクトの特定の特性や挙動を表現する。`},
{target:`object（オブジェクト）`, content:`JavaScriptにおけるデータ型の一つで、プロパティとメソッドを持つ複合データ構造。`},
{target:`constructor（コンストラクタ）`, content:`クラスやオブジェクトのインスタンスを生成するための特別なメソッド。通常、newキーワードとともに使用される。`},
{target:`argument（arg, 引数）`, content:`関数やメソッドに渡される値。パラメータとして関数内で使用される。`},
{target:`rv（戻り値）`, content:`関数が実行された結果として返す値。通常、return文で指定される。`},
{target:`selecter`, content:`CSSセレクターを指定する文字列。`},
{target:`listener`, content:`指定されたイベント発生時に実行される関数。`},
{target:`arg（引数）`, content:`引数の略称。関数やメソッドに渡される値として利用。`},
{target:`再帰関数`, content:`関数が自身の定義内で自己参照的に呼び出されること。問題を小さな部分に分割し、解を組み立てるのに有用。`},
{target:`再帰の深さ`, content:`再帰関数が自身を呼び出す深さ。深すぎる再帰はスタックオーバーフローを引き起こす可能性がある。`},
{target:`スタック`, content:`プログラムが関数の呼び出しや変数の保持などの情報を一時的に保存するデータ構造。再帰関数が呼ばれるとスタックに新しいフレームが積まれる。`},
{target:`オブジェクト`, content:`クラスの実体化であり、クラスの設計図に基づいて作られた具体的なデータ構造。クラスのプロパティやメソッドを持ち、これによりデータと振る舞いをカプセル化。実際にメモリ上に存在し、実行時に変数に割り当てることができる。`},
{target:`プロトタイプ`, content:`JavaScript オブジェクトが他のものから機能を継承する仕組み。`},
{target:`クラス`, content:`オブジェクト指向プログラミングにおいて、同じ性質や振る舞いを共有するオブジェクトの設計図。定義された属性（プロパティ）や振る舞い（メソッド）がインスタンスに反映される。`},
{target:`インスタンス`, content:`クラスを基にして作られた具体的なオブジェクト。クラスから複数生成でき、それぞれの独自のデータを持つ。オブジェクトの一種で、あるクラスの特定の実体を持つ。`},
{target:`インスタンス化`, content:`クラスをもとにオブジェクトを生成するプロセス。`},
{target:`コンストラクター`, content:`オブジェクト指向プログラミングにおいて、クラスから新しいオブジェクトを生成する際に呼び出される特別なメソッド。クラス内で定義され、そのクラスのインスタンスを初期化するための特別なメソッド。インスタンスを生成するときに呼び出され、インスタンスの初期状態を設定。`},
{target:`静的メソッド・クラスメソッド`, content:`インスタンスではなくクラスに関連づけられたメソッド。インスタンスの状態にアクセスせず、通常はクラス全体に関連する処理や操作を行うために使用。`},
{target:`静的プロパティ・クラスプロパティ`, content:`インスタンスではなくクラスに関連づけられたプロパティ。`},
{target:`動的メソッド`, content:`インスタンスに対して呼び出されるメソッド。インスタンスの状態にアクセスでき、通常はインスタンスのプロパティや他のメソッドを操作するために使用。クラス内で定義され、クラスから生成された各インスタンスに属す。`},
{target:`オブジェクト指向`, content:`プログラミングのパラダイムの一つで、プログラムをオブジェクトと呼ばれる個別のエンティティの集合に基づいて構築する考え方。オブジェクトはデータ（プロパティ）とそのデータを操作するための手続き（メソッド）を組み合わせたもの。`},
{target:`プロトタイプベース`, content:`オブジェクト指向プログラミングのひとつ。クラスを明示的に定義するのではなく、別のクラスのインスタンスにプロパティやメソッドを追加するという手法。JavaScriptなどで使用。`},
{target:`クラスベース`, content:`オブジェクト指向プログラミングのひとつ。オブジェクトの生成にクラスを用いるスタイルを指す。オブジェクトは、総じてクラスを実体化したインスタンスと定義される。Pythonなどで使用。`},
{target:`this`, content:`現在のオブジェクトを指すキーワード。`},
{target:`イテレータ―`, content:`要素を一つずつ順番に処理するオブジェクト。`},
{target:`HTMLCollection`, content:`要素の汎用的な集合を表し、リストから選択するためのメソッドとプロパティを提供。名前とインデックスの両方で、自身のメンバーをプロパティとして直接公開。HTML DOM 内のこれは生きて (live) いる。そのため、元になった文書が変更された時点で自動的に更新される。document.formsで取得。<br>const collection = document.forms;`},
{target:`NodeList`, content:`ノードの集合であり、 Node.childNodes などのプロパティやdocument.querySelectorAll() などのメソッドの返値として用いられる。NodeList には 生きたものと 静的なものの 2 種類ある。DOM が変化すると、自動的に集合が更新されることを生きた NodeListと呼ぶ。NodeList が静的なものの場合、DOM 内の変更が集合の内容に影響を与えない。document.querySelectorAll() メソッドは、静的な NodeList を返す。`},
{target:`キャメルケース（camelCase）`, content:`先頭の単語だけ小文字にしてあとの単語の先頭は大文字にする。JavaScriptやJavaなどのプログラミング言語でよく使用されている。`},
{target:`パスカルケース（PascalCase）`, content:`すべての単語の先頭が大文字になっている。アッパーキャメルケースとも呼ばれ、クラス名とかで使われている。`},
{target:`スネークケース（snake_case）`, content:`アンダースコア（_）で各単語を区切っていく規則。PythonやRubyなどのプログラミング言語でよく使用されている。`},
{target:`ケバブケース（kebab-case）`, content:`ハイフン（-）で各単語を区切っていく規則。URLやHTMLのクラス名でよく使用されている。`},
{target:`トピックス インポスター症候群`, content:`うまくやっているという客観的な証拠があるのに、自分は能力不足だと思い込む心理状態。`},
{target:`プロダクトマネージャー（PM）`, content:`ビジネス、市場、ユーザーの価値を理解して最も適切な製品の方向性を定義。｢実装すべき機能｣に優先順位をつける。フラットなチームでリーン／アジャイルな開発チームを推進。`},
{target:`プロダクトデザイナー（PD）`, content:`ユーザーを正しく理解するために、ユーザーテスト、インタビュー、アナリティクスを繰り返し計画・実行。製品やサービスを通じて得られる体験(UX)と、UXを実現する接点(UI)を生み出す。`},
{target:`アジャイル開発エンジニア`, content:`技術を正しく理解し、リーン/アジャイルなプログラミングを行なう。エレガントで高品質なソフトウェア・ソリューションを提供。業界や組織で包括的に適用されるソフトウェアエンジニアリングへのアプローチを実践、指導する。`},
{target:`業務専門家`, content:`機械学習などデータ解析でのプロジェクト全般のアイデア出し、入力データ項目の決定など。`},
{target:`データエンジニア`, content:`機械学習などデータ解析でのデータの入手・加工、学習データの準備。`},
{target:`データサイエンティスト`, content:`機械学習などデータ解析でのモデルの作成、モデルの最適化。`},
]
