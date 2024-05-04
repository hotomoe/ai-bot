import { bindThis } from '@/decorators.js';
import Message from '@/message.js';
import Module from '@/module.js';
// import serifs from '@/serifs.js';
import josa from "@/utils/josa.js";
import { genItem } from '@/vocabulary.js';
import config from '@/config.js';
import type { Note } from '@/misskey/note.js';

export default class extends Module {
	public readonly name = 'poll';

	@bindThis
	public install() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@bindThis
	private async post() {
		const duration = 1000 * 60 * 20;

		const polls = [ // TODO: Extract serif
			['신기해 보이는 것', '여러분, 어떤 게 가장 신기할 것 같나요?'],
			['맛있을 것 같은 것', '여러분은 어떤 게 가장 맛있을 것 같아요?'],
			['무거울 것 같은 것', '이 중에서 어느 게 가장 무거울 것 같나요?'],
			['갖고 싶은 것', '여러분, 이 중에서 어느 게 가장 갖고 싶으세요?'],
			['무인도에 가져가고 싶은 것', '여러분은 무인도에 한 가지를 가져갈 수 있다면 어떤 걸 가져가고 싶으세요?'],
			['집에 장식하고 싶은 것', '여러분은 집에 어떤 장식을 다시나요?'],
			['사업 아이템', '여러분은 어떤 게 가장 잘 팔릴 것 같아요?'],
			['내렸으면 하는 것들', '여러분, 다음 중에서 어떤 게 하늘에서 내렸으면 좋겠어요?'],
			['휴대폰으로 쓰고 싶은 것', '여러분은 어떤 걸 휴대폰으로 갖고 싶어요?'],
			['상품화하고 싶은 것', '여러분들은 상품화 하면 어떤 거 할래요?'],
			['발굴될 만한 것', '여러분은 유적에서 발굴될 것 같은 것은 무엇이라고 생각하시나요?'],
			['향기가 좋아보이는 것', '여러분들은 어떤 게 가장 좋은 향기가 난다고 생각하시나요?'],
			['어쩐지 비싸보이는 것', '여러분은 어떤 게 가장 고가에 거래될 것 생각하시나요?'],
			['지구 궤도상에 있을 법한 것', '여러분은 어떤 게 지구 궤도를 떠다닐 것 같다고 생각하세요?'],
			['선물하고 싶은 것', '여러분은 저에게 어떤 선물을 주고 싶으신가요?'],
			['선물받고 싶은 것', '여러분은 어떤 걸 선물로 받고 싶으세요?'],
			['제가 갖고 있을 만한 것', '여러분은 제가 어떤 걸 갖고 있을 것 같나요?'],
			['유행할 만한 것', '여러분, 어떤 게 유행할 것 같아요?'],
			['아침 식사', '여러분은 아침으로 어떤 걸 드시고 싶으신가요?'],
			['점심 식사', '여러분, 점심은 뭐로 드시고 싶으세요?'],
			['저녁 식사', '여러분은 저녁에 어떤 걸 먹고 싶어요?'],
			['몸에 좋아보이는 것', '여러분은 어떤 게 몸에 좋을 것 같아요?'],
			['후세에 물려주고 싶은 것', '여러분은 어떤 걸 후세에 물려주고 싶으세요?'],
			['악기가 될 만한 것', '이 중에서 어떤 걸 악기로 쓸 수 있을까요?'],
			['부대찌게에 넣을 만한 것', '여러분, 이 중에서 부대찌게에 넣을 만한 건 어떤 게 있을까요?'],
			['후리카케 대용으로 쓰고 싶은 것', '여러분은 어떤 걸 밥에 뿌리고 싶으세요?'],
			['자주 보는 것', '여러분, 어떤 걸 자주 보시나요'],
			['길가에 떨어져 있을 만한 것', '길가에서 주울 수 있는 건 어떤 게 있을까요?'],
			['미술관에 있을 만한 것', '여러분은 이 중에서 어떤 게 미술관에 있을 것 같아요?'],
			['교실에 있을 만한 것', '여러분은 어떤 게 교실에 있을 법한 것 같나요?'],
			['이모지가 되었으면 하는 것', '이모지가 되었으면 하는 걸 골라주세요!'],
			['호토 모에쨩의 집에 있을 법한 것', '여러분, 호토 모에쨩의 집에는 어떤 게 있을 것 같나요?'],
			['타는 쓰레기', '이 중에서 어느 게 타는 쓰레기일까요?'],
			['좋아하는 삼각김밥 맛', '여러분이 좋아하는 삼각김밥 맛은 무엇인가요?'],
			['반짝반짝 빛나는 울트라', '여러분, "반짝반짝 빛나는 울트라" 칭호를 붙일 만한 물건을 골라주세요!'],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const choices = [
			genItem(),
			genItem(),
			genItem(),
			genItem(),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// タイマーセット
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@bindThis
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: '아무도 투표하지 않았어요...',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `"${title}" 투표 결과를 공개합니다!`,
				text: `결과는 ${mostVotedChoice.votes}표의 ${josa(mostVotedChoice.text, '이었', '였')}습니다!`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `"${choice.text}"`).join(' 그리고 ');
			this.ai.post({ // TODO: Extract serif
				cw: `"${title}" 투표 결과를 공개합니다!`,
				text: `결과는 ${mostVotedChoice.votes}표의 ${josa(choices, '이었', '였')}습니다!`,
				renoteId: noteId,
			});
		}
	}
}
