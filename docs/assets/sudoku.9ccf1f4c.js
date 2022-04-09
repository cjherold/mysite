import"./common.f5819593.js";import{$ as t}from"./vendor.76ece678.js";console.log("loaded sudoku.css");const h=[[[4,5,3,6,9,1,7,2,8],[8,7,9,3,5,2,4,6,1],[2,1,6,8,4,7,9,3,5],[3,2,1,4,6,5,8,9,7],[7,6,8,2,1,9,3,5,4],[5,9,4,7,8,3,6,1,2],[1,3,5,9,7,8,2,4,6],[6,8,2,1,3,4,5,7,9],[9,4,7,5,2,6,1,8,3]],[[1,3,5,9,7,8,2,4,6],[6,8,2,1,3,4,5,7,9],[9,4,7,5,2,6,1,8,3],[4,5,3,6,9,1,7,2,8],[8,7,9,3,5,2,4,6,1],[2,1,6,8,4,7,9,3,5],[3,2,1,4,6,5,8,9,7],[7,6,8,2,1,9,3,5,4],[5,9,4,7,8,3,6,1,2]],[[6,9,1,7,2,8,4,5,3],[3,5,2,4,6,1,8,7,9],[8,4,7,9,3,5,2,1,6],[4,6,5,8,9,7,3,2,1],[2,1,9,3,5,4,7,6,8],[7,8,3,6,1,2,5,9,4],[9,7,8,2,4,6,1,3,5],[1,3,4,5,7,9,6,8,2],[5,2,6,1,8,3,9,4,7]],[[3,2,1,4,6,5,8,9,7],[7,6,8,2,1,9,3,5,4],[5,9,4,7,8,3,6,1,2],[4,5,3,6,9,1,7,2,8],[8,7,9,3,5,2,4,6,1],[2,1,6,8,4,7,9,3,5],[1,3,5,9,7,8,2,4,6],[6,8,2,1,3,4,5,7,9],[9,4,7,5,2,6,1,8,3]]];class f{constructor(o){const a={easy:60,medium:50,hard:35};this.difficulty=a[o];const e=Math.floor(Math.random()*h.length);this.loadout=h[e]||[]}initialize(){return this.swapLoadoutValues({numberOfSwaps:2}),this.shuffleLoadout(),this.flattenLoadout(),this.createBoard()}swapLoadoutValues({numberOfSwaps:o}){const a=(e,i,l)=>e===i?l:e===l?i:e;for(let e=0;e<o;e++){const i=Math.floor(Math.random()*9)+1,l=Math.floor(Math.random()*9)+1;this.loadout=this.loadout.map(s=>(s=s.map(c=>a(c,i,l)),s))}}shuffleLoadout(){const o=Math.floor(Math.random()*3);({0:()=>{this.loadout=[this.loadout[3],this.loadout[4],this.loadout[5],this.loadout[6],this.loadout[7],this.loadout[8],this.loadout[0],this.loadout[1],this.loadout[2]]},1:()=>{this.loadout=[this.loadout[6],this.loadout[7],this.loadout[8],this.loadout[0],this.loadout[1],this.loadout[2],this.loadout[3],this.loadout[4],this.loadout[5]]},2:()=>{this.loadout=[this.loadout[0],this.loadout[1],this.loadout[2],this.loadout[6],this.loadout[7],this.loadout[8],this.loadout[3],this.loadout[4],this.loadout[5]]}})[o]()}flattenLoadout(){const o=[];for(let a=0;a<9;a++)for(let e=0;e<9;e++)o.push(this.loadout[a][e]);this.loadout=o}createBoard(){const o=i=>{let l="";for(let s=0;s<9;s++){const c=i*9+s,u=Math.floor(Math.random()*100)>this.difficulty,r={id:c,correctanswer:this.loadout[c],changeable:u?"yes":"no",correct:u?"":"correct",covered:u?"covered":"",html:u?"":this.loadout[c]};l+=`
                        <div class="puzzle-tile d-flex">
                            <p id="${r.id}"
                                class="m-auto tile-number ${r.covered} ${r.correct}"
                                data-correctanswer="${r.correctanswer}"
                                data-changeable="${r.changeable}"
                            >${r.html}</p>
                        </div>
                    `}return l};return(()=>{let i="";for(let l=0;l<9;l++)i+=`
                        <div class="row d-flex justify-content-center puzzle-row">
                            ${o(l)}
                        </div>
                    `;return i})()}}let d=new f("easy");t("#puzzle-container").html("");t("#puzzle-container").append(d.initialize());m();p();t("#new-game").on("click",function(){t("#main-title").html("Sudoku").removeClass("winner");const n=t("input[name=difficulty]:checked").val();d=new f(n),t("#puzzle-container").html(""),t("#puzzle-container").append(d.initialize()),p(),console.log(`Loaded ${n}`)});function m(){t(".num-btn").on("click",function(n){const o=`#${t("#picker-wheel").attr("data-tilenumber")}`,a=t(o).data("correctanswer"),e=n.target.value;t(o).html(e),a==e?(t(o).data("correct",1),t(o).addClass("correct"),t(".correct").length>80&&(w(),t(".tile-number").attr("data-changeable","no"))):(t(o).data("correct",0),t(o).removeClass("correct")),t("#picker-wheel").hide()}),t("#close-wheel-btn").on("click",function(){t("#picker-wheel").attr("data-tilenumber",""),t("#picker-wheel").hide()})}function w(){t("#main-title").html("Winner!!").addClass("winner")}function p(){t(".puzzle-tile").on("click",function(o){const a=o.target.firstElementChild;o.target.firstElementChild.getAttribute("data-changeable")==="yes"&&n({x:o.pageX,y:o.pageY,currentTile:a})});const n=({x:o,y:a,currentTile:e})=>{const i=e.id;if(t("#picker-wheel").attr("data-tilenumber",i),screen.width>700)t("#picker-wheel").css({top:a-130,left:o-130});else{const l=screen.width/2-125,s=screen.height/2-125;t("#picker-wheel").css({bottom:`${s}px`,left:`${l}px`})}t("#picker-wheel").removeClass("d-none").show()}}
