export default {
    props: ['currentquote'],
    data()
    {
        return {
            animating: false,
        }
    },
    beforeUpdate()
    {
        this.animating = true;

        this.$nextTick(() => {
            this.animating = false;
        });
    },
    template: `
        <div class="card bg-white">
            <div class="card-body">
                <transition name="fade">
                    <p v-if="!animating" class="text-dark italic ff-serif fs-700">"{{ currentquote }}"</p>
                </transition>
            </div>
        </div>
    `
}