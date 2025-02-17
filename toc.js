// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="弁言.html">弁言</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">中文典籍</li><li class="chapter-item "><a href="三民主义.html"><strong aria-hidden="true">1.</strong> 三民主义</a></li><li class="chapter-item "><a href="唐六典.html"><strong aria-hidden="true">2.</strong> 唐六典</a></li><li class="chapter-item "><a href="通典.html"><strong aria-hidden="true">3.</strong> 通典</a></li><li class="chapter-item "><a href="建国方略.html"><strong aria-hidden="true">4.</strong> 建国方略</a></li><li class="chapter-item "><a href="政学私言.html"><strong aria-hidden="true">5.</strong> 政学私言</a></li><li class="chapter-item "><a href="孔子与中国之道.html"><strong aria-hidden="true">6.</strong> 孔子与中国之道</a></li><li class="chapter-item "><a href="士与中国文化.html"><strong aria-hidden="true">7.</strong> 士与中国文化</a></li><li class="chapter-item "><a href="论教育与反真女权.html"><strong aria-hidden="true">8.</strong> 论教育与反真女权</a></li><li class="chapter-item affix "><li class="part-title">外文書籍</li><li class="chapter-item "><a href="独裁者手册.html"><strong aria-hidden="true">9.</strong> The Dictator&#39;s Handbook: Why Bad Behavior is Almost Always Good Politics</a></li><li class="chapter-item "><a href="联邦党人文集.html"><strong aria-hidden="true">10.</strong> The Federalist Papers</a></li><li class="chapter-item "><a href="道德情操论.html"><strong aria-hidden="true">11.</strong> On the Moral Sentiments</a></li><li class="chapter-item "><a href="论美国的民主.html"><strong aria-hidden="true">12.</strong> On Democracy in America</a></li><li class="chapter-item "><a href="旧制度与大革命.html"><strong aria-hidden="true">13.</strong> The Old Regime and the French Revolution</a></li><li class="chapter-item "><a href="自由平等博爱.html"><strong aria-hidden="true">14.</strong> Liberty, Equality, Fraternity</a></li><li class="chapter-item "><a href="古代人的自由与现代人的自由.html"><strong aria-hidden="true">15.</strong> The Liberty of Ancients Compared with that of Moderns</a></li><li class="chapter-item "><a href="国会政体.html"><strong aria-hidden="true">16.</strong> Congressional Government: A Study in American Politics</a></li><li class="chapter-item "><a href="社会主义：经济与社会学分析.html"><strong aria-hidden="true">17.</strong> Socialism: An Economic and Sociological Analysis</a></li><li class="chapter-item "><a href="通往奴役之路.html"><strong aria-hidden="true">18.</strong> The Road to Serfdom</a></li><li class="chapter-item "><a href="致命的自负.html"><strong aria-hidden="true">19.</strong> The Fatal Conceit: The Errors of Socialism</a></li><li class="chapter-item "><a href="自由秩序原理.html"><strong aria-hidden="true">20.</strong> The Law of Liberty</a></li><li class="chapter-item "><a href="法律、立法与自由.html"><strong aria-hidden="true">21.</strong> Law, Legislation and Liberty</a></li><li class="chapter-item "><a href="开放社会及其敌人.html"><strong aria-hidden="true">22.</strong> The Open Society and Its Enemies</a></li><li class="chapter-item "><a href="历史决定论的贫困.html"><strong aria-hidden="true">23.</strong> The Poverty of Historicism</a></li><li class="chapter-item "><a href="极权主义的起源.html"><strong aria-hidden="true">24.</strong> The End of Economic Man: The Origins of Totalitarianism</a></li><li class="chapter-item "><a href="自由四论.html"><strong aria-hidden="true">25.</strong> Four Essays on Liberty</a></li><li class="chapter-item "><a href="自由及其背叛.html"><strong aria-hidden="true">26.</strong> In Defence of Freedom: Six Enemies of Human Liberty</a></li><li class="chapter-item "><a href="知识分子与社会.html"><strong aria-hidden="true">27.</strong> Intellectuals and Society</a></li><li class="chapter-item "><a href="所谓知识分子.html"><strong aria-hidden="true">28.</strong> Intellectuals: From Marx and Tolstoy to Sartre and Chomsky</a></li><li class="chapter-item "><a href="知识分子的鸦片.html"><strong aria-hidden="true">29.</strong> The Opium of the Intellectuals</a></li><li class="chapter-item "><a href="大国政治的悲剧.html"><strong aria-hidden="true">30.</strong> The Tragedy of Great Power Politics</a></li><li class="chapter-item "><a href="理想国.html"><strong aria-hidden="true">31.</strong> The Republic</a></li><li class="chapter-item "><a href="君主论.html"><strong aria-hidden="true">32.</strong> The Prince</a></li><li class="chapter-item "><a href="论法的精神.html"><strong aria-hidden="true">33.</strong> The Spirit of the Laws</a></li><li class="chapter-item "><a href="政府论.html"><strong aria-hidden="true">34.</strong> Two Treatises of Government</a></li><li class="chapter-item affix "><li class="part-title">概览</li><li class="chapter-item "><a href="国际关系理论.html"><strong aria-hidden="true">35.</strong> 国际关系理论</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
