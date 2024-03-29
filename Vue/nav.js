export default {
    data() {
        return {
            str: "",
        }
    },
    methods: {
        handleSearch() {
            this.$emit("search", this.str);
            console.log(this.str);
        }
    },
    template: 
    `
    <nav class="navbar navbar-expand-lg alert alert-secondary">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a id="Home" class="nav-link navbar-brand font-weight-bold" href="./default.html">Home</a>
                </li>
            </ul>
            <form id="searchForm" class="form-inline my-2 my-lg-0">
                <input v-model="str" id="inputSearch" class="form-control mr-sm-2" type="search" placeholder="Search"
                    aria-label="Search">
                <button id="buttonSearch" class="btn btn-outline-success" type="button" @click="handleSearch">Search</button>
            </form>
        </div>
    </nav>
    `
}