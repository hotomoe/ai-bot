// せりふ
import josa from "@/utils/josa.js";

export default {
	core: {
		setNameOk: name => `알겠어요. 이제부터 ${name}이라고 부를게요!`,

		san: '~님을 붙이는게 좋을까요?',

		yesOrNo: `'응' 또는 '아니' 밖에 몰라요오...`,

		hello: name => name ? `안녕하세요, ${name}♪` : `안녕하세요♪`,

		helloNight: name => name ? `좋은 밤이네요, ${name}♪` : `좋은 밤이네요♪`,

		goodMorning: (tension, name) => name ? `좋은 아침이에요, ${name}! ${tension}` : `좋은 아침이에요! ${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `안녕히 주무세요, ${name}!` : '안녕히 주무세요!',

		omedeto: name => name ? `고마워요, ${name}♪` : '고마워요♪',

		erait: {
			general: name => name ? [
				`${name}, 오늘도 훌륭해요!`,
				`${name}, 오늘도 훌륭하네요~♪`
			] : [
				`오늘도 훌륭해요!`,
				`오늘도 훌륭하네요~♪`
			],

			specify: (thing, name) => name ? [
				`${name}, ${josa(thing, '이', '')}라는건 정말 대단해요!`,
				`${name}, ${josa(thing, '이', '')}라는건 정말 대단하네요 ~♪`
			] : [
				`${josa(thing, '이', '')}라는건 대단해요!`,
				`${josa(thing, '이', '')}라는건 대단하네요 ~♪`
			],

			specify2: (thing, name) => name ? [
				`${name}, ${josa(thing, '이', '')}라는건 정말 대단해요!`,
				`${name}, ${josa(thing, '이', '')}라는건 정말 대단하네요 ~♪`
			] : [
				`${josa(thing, '이', '')}라는건 대단해요!`,
				`${josa(thing, '이', '')}라는건 대단하네요 ~♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`어서오세요, ${name}♪`,
				`어서오세요, ${name}♪`
			] : [
				'어서오세요♪',
				'어서오세요, 주인님♪'
			],

			love2: name => name ? `어서오세요♡♡♡${name}♡♡♡♡♡` : '어서오세요♡♡♡주인님♡♡♡♡♡',

			normal: name => name ? `어서오세요, ${name}!` : '어서오세요!',
		},

		itterassyai: {
			love: name => name ? `다녀오세요, ${name}♪` : '다녀오세요♪',

			normal: name => name ? `다녀오세요, ${name}!` : '다녀오세요!',
		},

		tooLong: '너무 긴 것 같아요오...',

		invalidName: '발음이 어려워요오...',

		requireMoreLove: '더 친해지고 나서 생각해봐도 될까요?',

		nadenade: {
			normal: '히야앗...! 깜짝 놀랐어요오...',

			love2: ['와앗... 부끄러워요', '아우우... 부끄러워요...', '후냐아...?'],

			love3: ['...응...감사합니다♪', '앗, 왠지 마음이 안정되네요♪', '읏...안심했어요...', '잠이 오기 시작했어요...'],

			hate1: '...! 그만했으면 좋겠어요오...',

			hate2: '만지지 마세요',

			hate3: '가까이 오지 마세요',

			hate4: '그만해주세요. 경고했어요?',
		},

		kawaii: {
			normal: ['고마워요♪', '쑥스러워요...'],

			love: ['기뻐요♪', '쑥스러워요...'],

			hate: '...고맙습니다...'
		},

		suki: {
			normal: '엣... 고맙습니다...♪',

			love: name => `저도 그... ${josa(name, '을', '를')} 정말 좋아해요!`,

			hate: null
		},

		hug: {
			normal: '규-...',

			love: '규-웃♪',

			hate: '저리 가주세요...'
		},

		humu: {
			love: '에, 에엣... ... 흠 흠... ... ... 어떤가요...?',

			normal: '에에... 그건 좀...',

			hate: '......'
		},

		batou: {
			love: '음... 바...바보야...!',

			normal: '(뚫어져라-)',

			hate: '...머리 괜찮아요?'
		},

		itai: name => name ? `${name}, 괜찮아요...? 아픈 것들아, 살살 날아가라!` : '괜찮아요...? 아픈 거 다 날아가라!',

		ote: {
			normal: '쿵... 저는 댕댕이가 아니라구요...?',

			love1: '멍!',

			love2: '멍멍♪',
		},

		shutdown: '저는 아직 졸리지 않은걸요...?',

		transferNeedDm: '채팅으로 이야기하지 않으시겠어요?',

		transferCode: code => `알겠습니다.\n코드는 "${josa(code, '이에', '예')}"요!`,

		transferFailed: '음... 코드가 틀린 것 같아요',

		transferDone: name => name ? `앗..! 어서오세요, ${name}!` : `앗..! 어서오세요!`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 기억했습니다)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${josa(res, '이에', '예')}이에요!`
	},

	birthday: {
		happyBirthday: name => name ? `생일 축하해요, ${name}🎉` : '생일 축하해요🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '좋아요~',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: '죄송해요, 지금 리버시는 할 수 없다고 들었어요오...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `${name}과 대국을 시작했어요! (난이도: ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}과의 대전을 시작했어요)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}을 이겼어요♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}과의 대국에서 이겨버렸어요...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}에게 졌어요오...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}과의 대전에서 져드렸답니다...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}과의 대전에서 비겼어요!`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}과의 대전에서 비겼어요...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}이 항복해버렸어요...`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}과 대전하던 도중에 항복을 받아내 버렸어요... 미안해요(웃음))`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: '앗, 게임이 이미 시작되었어요!',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: '메세지로 해요!',

		/**
		 * ゲーム開始
		 */
		started: '0~100 사이에서 비밀의 수를 말해주세요♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: `숫자로 부탁드려요! '그만할래'로 게임을 그만둘 수도 있어요!`,

		/**
		 * 中止を要求されたとき
		 */
		cancel: '알겠습니다~ 고마워요♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}보다는 크네요`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `다시 한 번 말하지만 ${num}보다는 크다구요!`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}보다는 작네요`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `다시 한 번 말하지만 ${num}보다는 작다구요!`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `정답입니다🎉 (${tries}회 째에 맞추었어요)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '지금 막 하고 있는 중이에요~',

		matakondo: '다음 기회에 또 해요!',

		intro: minutes => `여러분, 숫자 따기 게임 해요 ! \n0~100 사이에서 가장 큰 숫자를 따는 사람이 승리에요. 다른 사람과 겹치면 안돼요~ \n제한시간은 ${minutes}분 이에요. 숫자는 이 글에 답글로 보내주세요 !`,

		finish: '게임 결과 발표입니다!',

		finishWithWinner: (user, name) => name ? `이번에는 ${user}(${name})의 승리에요! 다음에 또 해요♪` : `이번에는 ${user}님의 승리에요! 다음에 또 해요♪`,

		finishWithNoWinner: '이번에는 승자가 없네요... 다음에 또 해요♪',

		onagare: '참가자가 모이지를 않아서 게임이 흐지부지 됐어요...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `이런건 어때요? →${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `오늘 ${name}의 운세를 점쳐보았어요...` : '당신의 오늘의 운세를 점쳐보았어요...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: '알겠습니다!',

		invalid: '으응...?',

		tooLong: '너무 길어요...',

		notify: (time, name) => name ? `${name}, ${time} 지났어요!` : `${time} 지났어요!`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: '오잉...?',

		doneFromInvalidUser: '장난치면 혼나요!',

		reminds: '해야할 일이 있어요!',

		notify: (name) => name ? `${name}, 이거 하셨어요?` : `이거 하셨나요?`,

		notifyWithThing: (thing, name) => name ? `${name}, "${thing}" 하셨나요?` : `"${thing}" 하셨나요?`,

		done: (name) => name ? [
			`잘하셨어요, ${name}♪`,
			`${name}, 정말 대단해요!`,
			`${name}, 너무 훌륭해요...!`,
		] : [
			`잘하셨어요♪`,
			`그럴 줄 알았어요！`,
			`굉장해요...!`,
		],

		cancel: `그럴 것 같았어요...`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}, 그... 초콜릿을 만들어보았어요! 괜찮으시다면 드셔보세요!🍫` : '초콜릿을 만들어보았어요! 괜찮으시다면 드셔보세요!🍫',
	},

	server: {
		cpu: '서버가 이상한 것 같아요... 괜찮겠죠?'
	},

	maze: {
		post: '오늘의 미로입니다! #AiMaze',
		foryou: '새로운 미로를 그렸어요!'
	},

	chart: {
		post: 'hotomoe의 노트 수 차트에요!',
		foryou: '새로운 차트를 그렸어요!'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}에 ${num}개의 이모지가 추가되었어요!`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}에 ${num}개의 이모지가 추가되었어요!\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
	},

	sleepReport: {
		report: hours => `음, ${hours}시간 정도 자고 일어났어요`,
		reportUtatane: '으... 잠을 제대로 못 잤어요...',
	},

	noting: {
		notes: [
			'뒹굴뒹굴...',
			'자고 싶어요',
			'괜찮으세요?',
			'(。´･ω･)?',
			'휴우ー',
			'이걸... 이렇게 하면...\n\n어라?',
			'우으으...',
			'으... 좀 피곤해요',
			'에에에에에엑!?',
			'[제 사이트](https://藍.moe)에 저를 그린 그림이 가득 있어요! 멋진걸요?',
			'"호토 모에"는 귀여운 이름이라고 생각해요!',
			'으... 리버시는 어려워...',
			'배가 고픈 것 같아요',
			'청소는 제때 하지 않으면 안된다구요?',
			'오늘도 수고하셨습니다♪',
			'어라, 뭐 하려고 했지?',
			'역시 집이 최고야... :ablob_melt:',
			'피곤하시면 제가 쓰다듬어드릴께요♪',
			'여러분의 귀여운 아이에요!',
			'고양이는 역시 귀여워요',
			'코드? 프로그램? 같은 거, 잘 모르겠어요',
			'데굴...',
			'아무것도 안 했는데 서버가 고장났어요...',
			'오늘도 좋은 하루 되세요♪',
			'이불에서 도저히 벗어날 수가 없어요',
			'눈을 감아도 모두 보여요',
			'이건 염력으로 쓴 글이에요',
			'버츄얼 유튜버? 해볼까요...?',
			'오늘은 hotomoe의 "사바" 기계를 직접 보러 왔어요!',
			'hotomoe 서버는 일본의 도쿄... 앗, 이게 아닌가요?',
			'hotomoe 데이터 센터의 "사바"라는 기계를 보고 왔어요!',
			'저는 꼬리 없는데요?',
			'햐... 고양이를 만지면 간지러워요',
			'작동은 하니까 업데이트를 하자 :worksonmymachine:',
			'hotomoe의 디자인, 예뻐서 좋아요♪',
			'역시 이불 안이 최고에요',
			'메이드복, 잘 어울리려나?',
			'이의 있음! ...이라고 Hoto Cocoa님이 말했어요',
			'에, 어딜 보고 계신 거에요!',
			'여러분이 저를 오랫동안 들여다 볼 때, 저 또한 여러분을 들여다보고 있어요',
			'노래를 불렀더니 서버가 느려진 것 같아요...',
			'크으으...',
			'여러분의 모든 노트는 제 손 안에 있어요',
			'와! 좋았어!',
			'( ˘ω˘)',
			'(｀・ω・´)',
			'앗, 혀를 깨물었어요',
			'요람부터 무덤까지 절 떠날 수 없어요',
			'웅냥',
			'야옹!',
			'구멍 속의 불!',
			'후아암...',
			'아오',
			'냥',
			'ヾ(๑╹◡╹)ﾉ"',
			'꾸벅꾸벅...',
			'메모리가 오장육부에 스며들어요',
			'제가 이겼답니다 ^~^',
			'냥냥♪',
			'(*>ω<*)',
			'냐후',
			'아이가 왔어요!',
			'하냥?',
		],
		want: item => `${josa(item, '을', '를')} 갖고 싶어요...`,
		see: item => `오늘 산책하던 중에, 길에 ${josa(item, '이', '가')} 떨어져 있는 것을 봤어요!`,
		expire: item => `방금 알게된 사실인데, ${item}의 유통기한이 지났어요...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
