/**
 * 删除指定的元素
 * @param element 要删除的元素
 * @param comparison_item [可选]  如果数组中的每一个元素是obj，那么需要根据元素的哪一个key去对比
 */
Array.prototype.removeSpecifyElement = function(element, comparison_item = null) {
    // 如果数组中的每一项都是字符串
    if(!comparison_item) {
        for (let i = 0, l = this.length; i < l; i++) {
            if(this[i] === element) {
                this.splice(i, 1);
                break
            }
        }
        return this
    }
    if(comparison_item) {
        // 必须保证每一项为字典
        for (let i = 0, l = this.length; i < l; i++) {
            let obj = this[i];
            if(Object.prototype.toString.call(obj) !== '[object Object]') {
                throw Error('数组内的每一项必须为字典')
            }
        }
        // 查找最后一个元素
        function find_value(cp_element, level) {
            let value;
            function find_last_element(cp_element, level) {
                if(level.length > 0) {
                    let key = level.splice(0, 1)[0];
                    value = cp_element[key];
                    find_last_element(cp_element[key], level)
                }
            }
            find_last_element(cp_element, level)
            return value
        }

        // 此处应该使用递归去处理

        let level = comparison_item.split('.');
        console.log(find_value(element, level), '最终的值')
        // for (let i = 0, level_length=level.length; i < level_length; i++) {
        //     let key = level[i]
        //     let ele =
        // }
    }

};
export default {

}