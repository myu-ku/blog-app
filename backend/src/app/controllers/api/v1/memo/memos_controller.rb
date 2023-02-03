class Api::V1::Memo::MemosController < ApplicationController
  def index
    memos = Memo.all
    render json: memos
  end
 
  def create
    content = memo_params["content"]
    memo = Memo.new(content: content)
    memo.save!
    render json: { status: 200 }
  end

  private
  def memo_params
    params.require(:memo).permit(:content)
  end
end
