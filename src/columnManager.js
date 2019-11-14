export {ColumnManager};
class ColumnManager {
    create(color,figure){
        let columnBack = this.createColumnBack(color);
        let contentDiv = this.createContentDiv();
        let button = this.createBtn(figure, color);
        let blocks = this.createBlock(figure, color);
        columnBack.append(contentDiv);
        contentDiv.append(button);
        //contentDiv.append(blocks);
        let container = document.getElementById('container');
        container.append(columnBack);
        return columnBack;
    }
    createColumnBack(color){
        let columnBack = document.createElement('div');
        columnBack.className='column-back';
        columnBack.style.backgroundColor=color;
        return columnBack;
    }
    createContentDiv(){
        let contentDiv = document.createElement('div');
        contentDiv.className='content-div';
        return contentDiv;
    }
    createBlock(figure, color){
        let block = document.createElement('div');
        block.className='block ' + figure;
        block.style.background=color;
        block.onclick=()=>{block.remove(this)};
        return block;
    }

    createBtn(figure, color){
        let btnCreate = document.createElement('button');
        btnCreate.className='btn-create';
        btnCreate.textContent=`Do more ${figure}'s`;
        btnCreate.onclick=()=>{ btnCreate.parentNode.append(this.createBlock(figure, color));}
        return btnCreate;
    }
    
}